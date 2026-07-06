// src/app/nucleo/barra-herramientas/modelos/contexto-barra-herramientas.model.ts
import { AccionBarraHerramientas } from './accion-barra-herramientas.model';

export interface ContextoBarraHerramientas {

  titulo: string;

  subtitulo?: string;

  acciones: AccionBarraHerramientas[];

}