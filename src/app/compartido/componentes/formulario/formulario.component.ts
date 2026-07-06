// ==========================================================
// Ubicación:
// src/app/compartido/componentes/formulario/formulario.component.ts
// ==========================================================

import { Component, effect, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

export interface OpcionFormulario {

  valor: unknown;

  texto: string;

}

export interface CampoFormulario {

  nombre: string;

  etiqueta: string;

  tipo: 'text'
      | 'email'
      | 'password'
      | 'number'
      | 'date'
      | 'select';

  valor: unknown;

  requerido: boolean;

  opciones?: OpcionFormulario[];

}

@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {

  readonly campos = input<CampoFormulario[]>([]);

  readonly guardar = output<Record<string, unknown>>();

  readonly formulario = new FormGroup({});

  readonly sincronizarFormulario = effect(() => {

  this.formulario.reset();

  for (const campo of this.campos()) {

    this.formulario.addControl(

      campo.nombre,

      new FormControl(campo.valor)

    );

  }

});

  enviar(): void {

    this.guardar.emit(

      this.formulario.getRawValue()

    );

  }

}