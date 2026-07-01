import { Routes } from '@angular/router';

export const RUTAS_APLICACION: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('../layouts/publico/publico/publico')
        .then(c => c.Publico)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];