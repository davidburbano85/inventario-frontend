//src/app/nucleo/servicios/temas/tema.service.ts



import {
  Injectable,
  signal,
  computed
} from '@angular/core';

export type Tema = 'claro' | 'oscuro';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  /*--------------------------------------------------------------------------
      Clave utilizada en localStorage.
  --------------------------------------------------------------------------*/
  private readonly CLAVE = 'tema';

  /*--------------------------------------------------------------------------
      Tema actual.
  --------------------------------------------------------------------------*/
  private readonly _tema = signal<Tema>('claro');

  /*--------------------------------------------------------------------------
      Solo lectura para el resto de la aplicación.
  --------------------------------------------------------------------------*/
  readonly tema = this._tema.asReadonly();

  /*--------------------------------------------------------------------------
      Indica si el tema actual es oscuro.
  --------------------------------------------------------------------------*/
  readonly esOscuro = computed(() => this._tema() === 'oscuro');

  constructor() {

    this.inicializar();

  }

  /*--------------------------------------------------------------------------
      Inicializa el tema.
  --------------------------------------------------------------------------*/
  private inicializar(): void {

    const temaGuardado = localStorage.getItem(this.CLAVE) as Tema | null;

    if (temaGuardado === 'claro' || temaGuardado === 'oscuro') {

      this.establecerTema(temaGuardado);

      return;

    }

    const prefiereOscuro = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    this.establecerTema(prefiereOscuro ? 'oscuro' : 'claro');

  }

  /*--------------------------------------------------------------------------
      Cambia entre claro y oscuro.
  --------------------------------------------------------------------------*/
  cambiarTema(): void {

    this.establecerTema(

      this._tema() === 'claro'
        ? 'oscuro'
        : 'claro'

    );

  }

  /*--------------------------------------------------------------------------
      Establece un tema.
  --------------------------------------------------------------------------*/
  establecerTema(tema: Tema): void {

    this._tema.set(tema);

    document.documentElement.setAttribute('data-tema', tema);

    localStorage.setItem(this.CLAVE, tema);

  }

}