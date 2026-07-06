// src/app/nucleo/barra-herramientas/servicios/barra-herramientas.service.ts
import { Injectable, signal } from '@angular/core';

import { AccionBarraHerramientas } from '../modelos/accion-barra-herramientas.model';
import { ContextoBarraHerramientas } from '../modelos/contexto-barra-herramientas.model';

@Injectable({
    providedIn: 'root'
})
export class BarraHerramientasService {

    /**
     * Acciones visibles en la barra de herramientas.
     */


    readonly contexto = signal<ContextoBarraHerramientas>({
        titulo: '',
        subtitulo: '',
        acciones: []
    });
    readonly accionSeleccionada = signal<AccionBarraHerramientas | null>(null);

    seleccionarAccion(accion: AccionBarraHerramientas): void {

        this.accionSeleccionada.set(accion);

    }

    establecerContexto(contexto: ContextoBarraHerramientas): void {

        this.contexto.set({
            ...contexto,
            acciones: [...contexto.acciones]
        });

    }

    establecerAcciones(acciones: AccionBarraHerramientas[]): void {

        this.contexto.update(contexto => ({
            ...contexto,
            acciones: [...acciones]
        }));

    }

    limpiar(): void {

        this.contexto.set({
            titulo: '',
            subtitulo: '',
            acciones: []
        });

    }

}