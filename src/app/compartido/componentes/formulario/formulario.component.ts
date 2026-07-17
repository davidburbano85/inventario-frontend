import {
  Component,
  effect,
  inject,
  input,
  output
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { FormularioService } from '../../servicios/formulario/formulario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {


  protected readonly formularioServicio =
    inject(FormularioService);


  readonly textoBoton =
    input<string>('Guardar');


  readonly claseBoton =
    input<string>('');


  readonly guardar =
    output<Record<string, unknown>>();


  readonly formulario =
    new FormGroup({});



  readonly sincronizarFormulario =
    effect(() => {


      const campos =
        this.formularioServicio.campos();



      this.formulario.reset();



      for (const campo of campos) {


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