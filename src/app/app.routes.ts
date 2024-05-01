import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './error/error.component';

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
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'pages' },
];
