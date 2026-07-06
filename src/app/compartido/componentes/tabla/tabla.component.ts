// ==========================================================
// Ubicación:
// src/app/compartido/componentes/tabla/
// ==========================================================

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
})
export class TablaComponent {

  readonly columnas = input<string[]>([]);

  readonly filas = input<Record<string, unknown>[]>([]);

}