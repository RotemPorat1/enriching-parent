import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResult } from '../interfaces/login-result.interface';
import { environment } from '../../../environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  readonly username = signal('');
  readonly isAdmin = signal(false);

  private http = inject(HttpClient);
  private tokenService = inject(TokenStorageService);

  login() {
    const { href } = new URL('api/auth/login', this.apiUrl);
    return this.http.get<{ authUrl: string }>(href).pipe(
      // Navigate to azure after getting auth url
      tap((res) => {
        window.location.href = res.authUrl;
      })
    );
  }

  handleRedirect(token: string) {
    // Set token
    if (token) {
      this.tokenService.setToken(token);
    }
  }

  ping() {
    const { href } = new URL('/api/ping', this.apiUrl);
    return this.http.get(href);
  }
}
