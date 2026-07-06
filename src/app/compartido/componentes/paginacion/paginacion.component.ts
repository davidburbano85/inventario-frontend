// ==========================================================
// Ubicación:
// src/app/compartido/componentes/paginacion/
// ==========================================================

import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  imports: [],
  templateUrl: './paginacion.component.html',
})
export class PaginacionComponent {

  readonly paginaActual = input.required<number>();

  readonly totalPaginas = input.required<number>();

  readonly cambiarPagina = output<number>();

  readonly puedeRetroceder = computed(() => {

    return this.paginaActual() > 1;

  });

  readonly puedeAvanzar = computed(() => {

    return this.paginaActual() < this.totalPaginas();

  });

  anterior(): void {

    if (!this.puedeRetroceder()) {

      return;

    }

    this.cambiarPagina.emit(

      this.paginaActual() - 1

    );

  }

  siguiente(): void {

    if (!this.puedeAvanzar()) {

      return;

    }

    this.cambiarPagina.emit(

      this.paginaActual() + 1

    );

  }

}