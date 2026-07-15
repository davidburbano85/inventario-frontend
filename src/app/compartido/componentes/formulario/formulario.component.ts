// ==========================================================
// Ubicación:
// src/app/compartido/componentes/formulario/formulario.component.ts
// ==========================================================

import { Component, effect, inject, output } from '@angular/core';
import {  FormControl,  FormGroup,  ReactiveFormsModule} from '@angular/forms';

import { FormularioService } from '../../servicios/formulario/formulario.service';
import{input} from "@angular/core";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {

  protected readonly formularioServicio = inject(FormularioService);

  readonly guardar = output<Record<string, unknown>>();

  readonly formulario = new FormGroup({});
  readonly textoBoton = input<string>('Guardar');

  readonly sincronizarFormulario = effect(() => {

    this.formulario.reset();

    for (const campo of this.formularioServicio.campos()) {

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