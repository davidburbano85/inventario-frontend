import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Encabezado} from '../encabezado/encabezado';
import { MenuLateral } from '../menu-lateral/menu-lateral';
import {PiePagina} from '../pie-pagina/pie-pagina';
import { Contenido } from '../contenido/contenido';




@Component({
  selector: 'app-layout-privado',
  standalone: true,
  imports: [RouterOutlet, Encabezado, MenuLateral, PiePagina, Contenido],
  templateUrl: './layout-privado.html',
  styleUrl: './layout-privado.scss'
})



export class LayoutPrivado {

}