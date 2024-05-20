import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/pages.routes'),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'redirect',
    loadComponent: () =>
      import('./redirect/redirect.component').then((c) => c.RedirectComponent),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./error/error.component').then((c) => c.ErrorComponent),
  },
  { path: '**', redirectTo: 'pages' },
];
