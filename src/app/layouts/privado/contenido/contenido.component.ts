// src/app/layouts/privado/contenido/contenido.component.ts

import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BarraHerramientasService } from '../../../nucleo/barra-herramientas/servicios/barra-herramientas.service';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.scss'
})
export class ContenidoComponent {

  private readonly servicioBarraHerramientas = inject(
    BarraHerramientasService
  );

  private readonly inicializarContexto = effect(() => {

    this.servicioBarraHerramientas.establecerContexto({
      titulo: 'Contenido',
      subtitulo: 'Página principal',
      acciones: [
        {
          id: 'nuevo',
          titulo: 'Nuevo',
          icono: 'add',
          tipo: 'primario'
        },
        {
          id: 'exportar',
          titulo: 'Exportar',
          icono: 'download',
          tipo: 'secundario'
        },
        {
          id: 'eliminar',
          titulo: 'Eliminar',
          icono: 'delete',
          tipo: 'peligro'
        }
      ]
    });

  });

}