// src/app/nucleo/barra-herramientas/modelos/accion-barra-herramientas.model.ts
export type TipoAccionBarraHerramientas =
  | 'primario'
  | 'secundario'
  | 'texto'
  | 'exito'
  | 'advertencia'
  | 'peligro';// Define los tipos de apariencia visual que puede tener una acción en la barra de herramientas.
  //en este caso, 'primario', 'secundario', 'texto', 'exito', 'advertencia' y 'peligro' son los tipos disponibles.

export interface AccionBarraHerramientas {

  /**
   * Identificador único de la acción.
   */
  id: string;

  /**
   * Texto mostrado en el botón.
   */
  titulo: string;

  /**
   * Nombre del icono de Material Symbols.
   */
  icono?: string;

  /**
   * Apariencia visual del botón.
   */
  tipo?: TipoAccionBarraHerramientas;

  /**
   * Controla si la acción debe mostrarse.
   */
  visible?: boolean;

  /**
   * Indica si la acción está deshabilitada.
   */
  deshabilitado?: boolean;

  /**
   * Indica si la acción está ejecutando un proceso.
   */
  cargando?: boolean;

  /**
   * Función ejecutada al hacer clic.
   */
  
}