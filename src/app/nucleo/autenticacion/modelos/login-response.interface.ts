// src/app/nucleo/autenticacion/modelos/login-response.interface.ts
import { UsuarioSesion } from '../../autenticacion/modelos/usuario-sesion-interface';

export interface LoginResponse {

  accessToken: string;

  refreshToken: string;

  usuario: UsuarioSesion;

}