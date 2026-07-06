// src/app/layouts/privado/contenido/contenido.ts
import { Component, effect, inject, viewChild, ViewChild } from '@angular/core';

import { BarraHerramientasService } from '../../../nucleo/barra-herramientas/servicios/barra-herramientas.service';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.scss',
})
export class Contenido {

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
          titulo: 'eliminar',
          icono: 'delete',
          tipo: 'peligro'
        }

      ]
    });



  });

 

}