// ==========================================================
// Ubicación:
// src/app/compartido/servicios/formulario/formulario.service.ts
// ==========================================================

import { Injectable, signal } from '@angular/core';
import { CampoFormulario } from '../../modelos/formulario/campo-formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  readonly campos = signal<CampoFormulario[]>([]);

  establecerCampos(campos: CampoFormulario[]): void {

    this.campos.set(campos);

  }

  limpiar(): void {

    this.campos.set([]);

  }

}