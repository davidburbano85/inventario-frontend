// src/app/features/autenticacion/paginas/login/login.component.ts

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';

import { Router } from '@angular/router';

import { AutenticacionService } from '../../../../nucleo/servicios/autenticacion/autenticacion.service';
import { LoginRequest } from '../../../../nucleo/autenticacion/modelos/login-request.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  private readonly servicioAutenticacion = inject(AutenticacionService);
  private readonly router = inject(Router);

  readonly cargando = signal(false);

  readonly email = signal('');
  readonly password = signal('');

  iniciarSesion(): void {

    if (this.cargando()) {
      return;
    }

    this.cargando.set(true);

    const datos: LoginRequest = {
      email: this.email(),
      password: this.password()
    };

    this.servicioAutenticacion
      .iniciarSesion(datos)
      .subscribe({
        next: () => {

          this.cargando.set(false);

          // La sesión ya fue almacenada por AutenticacionService.
          this.router.navigateByUrl('/inicio');

        },
        error: () => {

          this.cargando.set(false);

        }
      });

  }

}