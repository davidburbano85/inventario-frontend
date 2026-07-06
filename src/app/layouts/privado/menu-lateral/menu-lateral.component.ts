/* src/app/layouts/privado/menu-lateral/menu-lateral.ts */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuLateralService } from '../../../nucleo/navegacion/servicios/menu-lateral.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  // change detection strategy is set to OnPush for
  //  performance optimization  en español: 
  // la estrategia de detección de cambios se establece 
  // en OnPush para optimización del rendimiento
})
export class MenuLateral {

  protected readonly servicioMenu = inject(MenuLateralService);
  // inyecta el servicio de menú lateral para poder usarlo en la 
  // plantilla

  protected alternarGrupo(id: string): void {
    this.servicioMenu.alternarGrupo(id);
  }// se invoca el método del servicio para alternar 
  //la visibilidad de un grupo de menú

  protected seleccionarItem(): void {
    this.servicioMenu.cerrarMenu();
  }// se invoca el método del servicio para cerrar el menú lateral

   protected alternarMenu(): void {

    this.servicioMenu.alternarMenu();

  }




}