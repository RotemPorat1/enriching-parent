import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly tokenService: TokenStorageService,
    private readonly router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /**
     * JWT token
     */
    const token = this.tokenService.getToken();

    // Add header - Authrization: Bearer <token>
    if (token !== null) {
      request = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`),
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (
          // If http error, not login route, and status is 401
          error instanceof HttpErrorResponse &&
          !request.url.includes('auth/login') &&
          error.status === 401
        ) {
          return this.handle401Error();
        }

        // Else another error occured, throw it
        return throwError(() => error);
      })
    );
  }

  /**
   * Clear session storage, navigate to login, and abort request
   */
  private handle401Error() {
    // Perform a logout, incase of jwt expired
    this.tokenService.logout();

    // Handle 401 error by redirecting the user to azure login
    this.router.navigateByUrl('/login');

    // Abort request
    return EMPTY;
  }
}
