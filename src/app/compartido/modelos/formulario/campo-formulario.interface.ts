// ==========================================================
// Ubicación:
// src/app/compartido/modelos/formulario/campo-formulario.interface.ts
// ==========================================================

import { OpcionFormulario } from './opcion-formulario.interface';

export interface CampoFormulario {

  nombre: string;

  etiqueta: string;

  tipo:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'select';

  valor: unknown;

  requerido: boolean;

  opciones?: OpcionFormulario[];

}