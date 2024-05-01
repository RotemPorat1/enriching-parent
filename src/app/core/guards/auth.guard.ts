import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, catchError, of } from 'rxjs';
import { LoginResult } from '../interfaces/login-result.interface';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return of(true);
  return authService.login().pipe(
    map((loginResult: LoginResult) => {
      const isAuthenticated = Boolean(loginResult);
      return isAuthenticated;
    }),
    catchError(() => {
      router.navigateByUrl('/error');
      return of(false);
    })
  );
};
