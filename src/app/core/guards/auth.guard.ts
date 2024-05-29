import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { of } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(TokenStorageService);
  const router = inject(Router);
  return of(true);
  const token = tokenService.getToken();

  if (token) {
    return of(true);
  }

  return router.parseUrl('/login');
  // return of(false);
};
