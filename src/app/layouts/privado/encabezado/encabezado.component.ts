import {  ChangeDetectionStrategy,  Component,  computed,  inject,  signal} from '@angular/core';

import { Router } from '@angular/router';

import { MenuLateralService } from '../../../nucleo/navegacion/servicios/menu-lateral.service';
import { AutenticacionService } from '../../../nucleo/servicios/autenticacion/autenticacion.service';
import{ TemaService } from '../../../nucleo/servicios/temas/tema.service';
interface Empresa {
  id: number;
  nombre: string;
  almacenes: Almacen[];
}

interface Almacen {
  id: number;
  nombre: string;
}

interface OpcionUsuario {
  id: number;
  titulo: string;
  icono: string;
   accion?: 'perfil' | 'configuracion' | 'cerrarSesion';
}

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EncabezadoComponent {

  private readonly router = inject(Router);

  private readonly autenticacionService = inject(AutenticacionService);

  private readonly temaService = inject(TemaService);

  protected readonly servicioMenu = inject(MenuLateralService);

  protected readonly nombreAplicacion = signal('Inventario IA');

  /**
   * Usuario autenticado.
   */
  protected readonly usuarioSesion =
    this.autenticacionService.usuarioSesion;


    /**
 * Tema actual de la aplicación.
 */
protected readonly tema = this.temaService.tema;

/**
 * Indica si el tema actual es oscuro.
 */
protected readonly esOscuro = this.temaService.esOscuro;

  protected readonly empresas = signal<Empresa[]>([
    {
      id: 1,
      nombre: 'Burbano Builders Enterprise',
      almacenes: [
        { id: 1, nombre: 'Compumundo Hyper Mega Red' },
        { id: 2, nombre: 'Bodega Norte' },
        { id: 3, nombre: 'Bodega Sur' }
      ]
    },
    {
      id: 2,
      nombre: 'Distribuidora XYZ',
      almacenes: [
        { id: 4, nombre: 'Central' },
        { id: 5, nombre: 'Occidente' }
      ]
    }
  ]);

  protected readonly empresaSeleccionada = signal<Empresa>(
    this.empresas()[0]
  );

  protected readonly almacenSeleccionado = signal<Almacen>(
    this.empresas()[0].almacenes[0]
  );

  protected readonly almacenes = computed(() =>
    this.empresaSeleccionada().almacenes
  );

  protected readonly menuEmpresaAbierto = signal(false);

  protected readonly menuAlmacenAbierto = signal(false);

  protected readonly menuUsuarioAbierto = signal(false);

protected readonly opcionesUsuario = signal<OpcionUsuario[]>([
  {
    id: 1,
    titulo: 'Mi perfil',
    icono: 'person',
    accion: 'perfil'
  },
  {
    id: 2,
    titulo: 'Configuración',
    icono: 'settings',
    accion: 'configuracion'
  },
  {
    id: 3,
    titulo: 'Cerrar sesión',
    icono: 'logout',
    accion: 'cerrarSesion'
  }
]);

protected ejecutarOpcion(
  opcion: OpcionUsuario
): void {

  switch (opcion.accion) {

    case 'perfil':
      // TODO: navegar al perfil.
      break;

    case 'configuracion':
      // TODO: navegar a configuración.
      break;

    case 'cerrarSesion':
      this.cerrarSesion();
      break;

    default:
      break;

  }

}

  protected alternarMenuEmpresa(): void {

    this.menuEmpresaAbierto.update(valor => !valor);

    this.menuAlmacenAbierto.set(false);

    this.menuUsuarioAbierto.set(false);

  }

  protected alternarMenuAlmacen(): void {

    this.menuAlmacenAbierto.update(valor => !valor);

    this.menuEmpresaAbierto.set(false);

    this.menuUsuarioAbierto.set(false);

  }

  protected alternarMenuUsuario(): void {

    this.menuUsuarioAbierto.update(valor => !valor);

    this.menuEmpresaAbierto.set(false);

    this.menuAlmacenAbierto.set(false);

  }

  protected seleccionarEmpresa(
    empresa: Empresa
  ): void {

    this.empresaSeleccionada.set(empresa);

    this.almacenSeleccionado.set(
      empresa.almacenes[0]
    );

    this.menuEmpresaAbierto.set(false);

  }

  protected seleccionarAlmacen(
    almacen: Almacen
  ): void {

    this.almacenSeleccionado.set(almacen);

    this.menuAlmacenAbierto.set(false);

  }

  protected irInicio(): void {

    this.router.navigate(['/inicio']);

  }

  protected alternarMenu(): void {

    this.servicioMenu.alternarMenu();

  }


  /**
 * Cambia entre modo claro y modo oscuro.
 */
protected cambiarTema(): void {

  this.temaService.cambiarTema();

}

  /**
   * Cierra la sesión del usuario.
   */
  protected cerrarSesion(): void {

    this.autenticacionService.cerrarSesion();

    this.router.navigate(['/login']);

  }

}