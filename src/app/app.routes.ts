import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.routes'),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./error/error.component').then((c) => c.ErrorComponent),
  },
  { path: '**', redirectTo: 'pages' },
];

