export interface Menu {
  grupos: GrupoMenu[];// Grupo de elementos del menú 
  // se crea un grupo para cada sección del menú lateral,
  //  cada grupo puede contener varios elementos de menú.
}

export interface GrupoMenu {
  id: string;
  titulo: string;
  icono: string;
  visible?: boolean;
  expandido?: boolean;
  items: ItemMenu[];
}// este modelo se utiliza para definir la estructura
// de los elementos del menú lateral, 

export interface ItemMenu {
  id: string;
  titulo: string;




  
  icono: string;
  ruta: string;
  visible?: boolean;
  badge?: string | number;
  hijos?: ItemMenu[];
}// este modelo se utiliza para definir la estructura
// de los elementos del menú lateral, cada elemento puede tener hijos
// que son elementos de menú secundarios, y pueden tener un badge
// que es un número o texto que se muestra al lado del título del elemento.