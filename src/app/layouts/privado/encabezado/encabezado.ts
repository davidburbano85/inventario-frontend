import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss'
})
export class Encabezado {

  // Más adelante permitirá contraer y expandir el menú lateral.
  protected alternarMenu(): void {

  }

}