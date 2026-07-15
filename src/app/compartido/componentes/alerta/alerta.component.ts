
// src/app/compartido/componentes/alerta/alerta.ts
// ==========================================================

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [],
  templateUrl: './alerta.component.html',
})
export class AlertaComponent {

  readonly visible = signal(false);

  readonly titulo = signal('');
  readonly mensaje = signal('');
  readonly tipo = signal<'exito' | 'error' | 'advertencia' | 'informacion'>('informacion');

  mostrar(
    titulo: string,
    mensaje: string,
    tipo: 'exito' | 'error' | 'advertencia' | 'informacion'
  ): void {

    this.titulo.set(titulo);
    this.mensaje.set(mensaje);
    this.tipo.set(tipo);

    this.visible.set(true);

    setTimeout(() => {

      this.ocultar();

    }, 3000);

  }

  ocultar(): void {

    this.visible.set(false);

  }

}