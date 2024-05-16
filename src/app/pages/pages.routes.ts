import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContextComponent } from './context/context.component';
import { HeaderComponent } from './header/header.component';
export default [
  {
    path: '',
    component: PagesComponent,

    // children: [
    //   {
    //     path: 'context',
    //     loadComponent: () =>
    //       import('./context/context.component').then((m) => m.ContextComponent),
    //   },
    // ],
  },
] as Routes;
