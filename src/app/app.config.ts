import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { routes } from './app.routes';

import { jwtInterceptor } from './nucleo/autenticacion/interceptores/jwt.interceptor';

import { TemaService } from './nucleo/servicios/temas/tema.service';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(
      withInterceptors([
        jwtInterceptor
      ])
    ),

    /*--------------------------------------------------------------------------
      Inicializa el tema antes de renderizar la aplicación.
      El constructor de TemaService aplica el tema guardado o el predeterminado.
    --------------------------------------------------------------------------*/
    provideAppInitializer(() => {

      inject(TemaService);

    })

  ]

};