import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contenido.html',
  styleUrl: './contenido.scss',
})
export class Contenido {}
