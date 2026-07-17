//src/app/layouts/privado/barra-herramientas/barra-herramientas.component.tss
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BarraHerramientasService } from '../../../nucleo/barra-herramientas/servicios/barra-herramientas.service';

@Component({
  selector: 'app-barra-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './barra-herramientas.component.html',
  styleUrl: './barra-herramientas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarraHerramientas {

  protected readonly servicioBarraHerramientas = inject(
    BarraHerramientasService
  );

}