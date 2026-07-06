// src/app/layouts/privado/layout-privado/layout-privado.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Encabezado} from '../encabezado/encabezado.component';
import { MenuLateral } from '../menu-lateral/menu-lateral.component';
import {PiePagina} from '../pie-pagina/pie-pagina.component';
import { BarraHerramientas } from '../barra-herramientas/barra-herramientas.component';
import { Contenido } from '../contenido/contenido.component';




@Component({
  selector: 'app-layout-privado',
  standalone: true,
  imports: [ Encabezado, MenuLateral, PiePagina, BarraHerramientas, Contenido],
  templateUrl: './layout-privado.component.html',
  styleUrl: './layout-privado.component.scss'
})



export class LayoutPrivado {

}