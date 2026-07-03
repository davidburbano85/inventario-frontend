import { Injectable, signal } from '@angular/core';

import { MENU } from '../configuracion/menu.config';
import { GrupoMenu } from '../modelos/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  readonly grupos = signal<GrupoMenu[]>(MENU.grupos);
  // Grupo de elementos del menú lateral, 
  // cada grupo puede contener varios elementos de menú.

  alternarGrupo(id: string): void {
    // Método para alternar la expansión de un grupo del menú lateral

    this.grupos.update(grupos =>
        // Actualiza el estado de los grupos del menú lateral
      grupos.map(grupo => ({
        // Mapea cada grupo del menú lateral
        ...grupo,
        expandido: grupo.id === id
        // Si el id del grupo es igual al id pasado como parámetro, 
        // se alterna su estado de expansión
          ? !grupo.expandido
          : false
      }))
    );

  }

}

