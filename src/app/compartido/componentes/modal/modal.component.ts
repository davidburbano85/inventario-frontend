// ==========================================================
// Ubicación:
// src/app/compartido/componentes/modal/modal.ts
// ==========================================================

import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  readonly visible = signal(false);

  readonly titulo = signal('');
  readonly mensaje = signal('');

  readonly aceptar = output<void>();
  readonly cancelar = output<void>();

  abrir(titulo: string, mensaje: string): void {

    this.titulo.set(titulo);
    this.mensaje.set(mensaje);

    this.visible.set(true);

  }

  cerrar(): void {

    this.visible.set(false);

  }

  confirmar(): void {

    this.aceptar.emit();
    this.cerrar();

  }

  cancelarModal(): void {

    this.cancelar.emit();
    this.cerrar();

  }

}