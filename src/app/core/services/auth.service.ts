import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResult } from '../interfaces/login-result.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  readonly username = signal('');
  readonly isAdmin = signal(false);

  private http = inject(HttpClient);

  login() {
    const { href } = new URL('/api/auth/login', this.apiUrl);
    return this.http.post<LoginResult>(href, {}).pipe(
      // Extract details
      tap((result) => {
        const { username, isAdmin } = result;
        this.username.set(username);
        this.isAdmin.set(isAdmin);
      })
    );
  }
}
