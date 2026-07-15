// src/app/nucleo/servicios/autenticacion/autenticacion.service.ts

import { Injectable, inject, signal } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { ApiService } from '../api/api.service';

import { LoginRequest } from '../../autenticacion/modelos/login-request.interface';
import { LoginResponse } from '../../autenticacion/modelos/login-response.interface';
import { UsuarioSesion } from '../../autenticacion/modelos/usuario-sesion-interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly api = inject(ApiService);

  /**
   * Estado de la sesión del usuario autenticado.
   */
  private readonly _usuarioSesion = signal<UsuarioSesion | null>(null);

  /**
   * Sesión de solo lectura para el resto de la aplicación.
   */
  readonly usuarioSesion = this._usuarioSesion.asReadonly();

  /**
   * Inicia sesión.
   */
  iniciarSesion(
    credenciales: LoginRequest
  ): Observable<LoginResponse> {

    return this.api
      .crear<LoginResponse>('auth/login', credenciales)
      .pipe(
        tap((respuesta) => {

          localStorage.setItem(
            'accessToken',
            respuesta.accessToken
          );

          localStorage.setItem(
            'refreshToken',
            respuesta.refreshToken
          );

          // Guarda la información del usuario en la sesión.
          this.establecerSesion(respuesta.usuario);

        })
      );

  }

  /**
   * Guarda la sesión del usuario.
   */
  establecerSesion(
    usuario: UsuarioSesion
  ): void {

    this._usuarioSesion.set(usuario);

  }

  /**
   * Obtiene la sesión actual.
   */
  obtenerSesion(): UsuarioSesion | null {

    return this._usuarioSesion();

  }

  /**
   * Obtiene el token de acceso.
   */
  obtenerToken(): string | null {

    return localStorage.getItem('accessToken');

  }

  /**
   * Indica si existe un token de autenticación.
   */
  estaAutenticado(): boolean {

    return !!this.obtenerToken();

  }

  /**
   * Cierra la sesión.
   */
  cerrarSesion(): void {

    this._usuarioSesion.set(null);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

  }

}