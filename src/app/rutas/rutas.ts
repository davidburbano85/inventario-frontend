import { Routes } from '@angular/router';

export const RUTAS_APLICACION: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('../features/autenticacion/paginas/login/login.component')
        .then(c => c.LoginComponent)
  },

  {
    path: 'inicio',
    loadComponent: () =>
      import('../layouts/privado/layout-privado/layout-privado.component')
        .then(c => c.LayoutPrivado)
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];