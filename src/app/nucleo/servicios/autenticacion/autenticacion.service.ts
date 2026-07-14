// src/app/nucleo/autenticacion/servicios/autenticacion.service.ts

import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ApiService } from '../api/api.service';
import { LoginRequest } from '../../autenticacion/modelos/login-request.interface';
import { LoginResponse } from '../../autenticacion/modelos/login-response.interface';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {





  private readonly api = inject(ApiService);

  iniciarSesion(datos: LoginRequest): Observable<LoginResponse> {

    return this.api
      .crear<LoginResponse>(
        '/api/auth/login',
        datos
      )
      .pipe(
        tap(respuesta => {

          localStorage.setItem('accessToken', respuesta.accessToken);

          localStorage.setItem('refreshToken',respuesta.refreshToken);

        })
      );

  }

  cerrarSesion(): void {

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

  }

  obtenerToken(): string {

    return localStorage.getItem('accessToken') ?? '';

  }

  estaAutenticado(): boolean {

    return this.obtenerToken() !== '';

  }

}