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
      import('../layouts/privado/layout-privado/layout-privado')
        .then(c => c.LayoutPrivado)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];