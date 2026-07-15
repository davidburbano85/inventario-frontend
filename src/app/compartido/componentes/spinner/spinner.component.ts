// ==========================================================
// Ubicación:
// src/app/compartido/componentes/spinner/spinner.ts
// ==========================================================

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {

  readonly visible = signal(false);

  mostrar(): void {

    this.visible.set(true);

  }

  ocultar(): void {

    this.visible.set(false);

  }

}