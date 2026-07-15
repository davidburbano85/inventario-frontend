// src/app/layouts/privado/layout-privado/layout-privado.ts

import { Component } from '@angular/core';

import {EncabezadoComponent} from '../encabezado/encabezado.component';
import { MenuLateral } from '../menu-lateral/menu-lateral.component';
import {PiePagina} from '../pie-pagina/pie-pagina.component';
import { BarraHerramientas } from '../barra-herramientas/barra-herramientas.component';
import { ContenidoComponent } from '../contenido/contenido.component';




@Component({
  selector: 'app-layout-privado',
  standalone: true,
  imports: [ EncabezadoComponent, MenuLateral, PiePagina, BarraHerramientas, ContenidoComponent],
  templateUrl: './layout-privado.component.html',
  styleUrl: './layout-privado.component.scss'
})



export class LayoutPrivado {

}