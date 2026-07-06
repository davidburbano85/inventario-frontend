import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BarraHerramientasService } from '../../../nucleo/barra-herramientas/servicios/barra-herramientas.service';

@Component({
  selector: 'app-barra-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './barra-herramientas.html',
  styleUrl: './barra-herramientas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarraHerramientas {

  protected readonly servicioBarraHerramientas = inject(
    BarraHerramientasService
  );

}