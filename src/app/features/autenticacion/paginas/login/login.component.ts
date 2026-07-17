// ==========================================================
// Ubicación:
// src/app/features/autenticacion/paginas/login/login.component.ts
// ==========================================================

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild
} from '@angular/core';

import { Router } from '@angular/router';

import { AutenticacionService } from '../../../../nucleo/servicios/autenticacion/autenticacion.service';
import { LoginRequest } from '../../../../nucleo/autenticacion/modelos/login-request.interface';

import { FormularioComponent } from '../../../../compartido/componentes/formulario/formulario.component';
import { SpinnerComponent } from '../../../../compartido/componentes/spinner/spinner.component';
import { AlertaComponent } from '../../../../compartido/componentes/alerta/alerta.component';

import { FormularioService } from '../../../../compartido/servicios/formulario/formulario.service';
import { CampoFormulario } from '../../../../compartido/modelos/formulario/campo-formulario.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormularioComponent,
    SpinnerComponent,
    AlertaComponent
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  private readonly servicioAutenticacion = inject(AutenticacionService);
  private readonly formularioServicio = inject(FormularioService);
  private readonly router = inject(Router);

  protected readonly spinner = viewChild.required(SpinnerComponent);
  protected readonly alerta = viewChild.required(AlertaComponent);



  readonly campos: CampoFormulario[] = [
    {
      nombre: 'email',
      etiqueta: 'Correo electrónico',
      tipo: 'email',
      valor: '',
      requerido: true
    },
    {
      nombre: 'password',
      etiqueta: 'Contraseña',
      tipo: 'password',
      valor: '',
      requerido: true
    }
  ];

  // Inicializa los campos que renderizará FormularioComponent.
  private readonly inicializar = this.formularioServicio.establecerCampos(this.campos);

  iniciarSesion(datos: Record<string, unknown>): void {

    const login: LoginRequest = {
      email: String(datos['email'] ?? ""),
      password: String(datos['password'] ?? "")
    }



    this.spinner().mostrar();

    this.servicioAutenticacion
      .iniciarSesion(login)
      .subscribe({

        next: () => {

          this.spinner().ocultar();

          this.alerta().mostrar(
            'Bienvenido',
            'Inicio de sesión exitoso.',
            'exito'
          );

           this.router.navigateByUrl('/inicio');

        },

        error: () => {

          this.spinner().ocultar();

          this.alerta().mostrar(
            'Error',
            'Correo o contraseña incorrectos.',
            'error'
          );

        }

      });

  }

}