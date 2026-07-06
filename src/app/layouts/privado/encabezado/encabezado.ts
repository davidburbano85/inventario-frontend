// src/app/layouts/privado/encabezado/encabezado.ts
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {MenuLateralService} from '../../../nucleo/navegacion/servicios/menu-lateral.service';

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
}

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Encabezado {

  protected readonly nombreAplicacion = signal('Inventario IA');

  protected readonly usuarioActivo = signal('David Burbano');

  protected readonly empresas = signal<Empresa[]>([
    {
      id: 1,
      nombre: 'Burbano Builders Enterprise ',
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

  protected readonly empresaSeleccionada = signal<Empresa>(this.empresas()[0]);

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
      icono: 'person'
    },
    {
      id: 2,
      titulo: 'Configuración',
      icono: 'settings'
    },
    {
      id: 3,
      titulo: 'Cerrar sesión',
      icono: 'logout'
    }
  ]);

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

  protected seleccionarEmpresa(empresa: Empresa): void {

    this.empresaSeleccionada.set(empresa);

    this.almacenSeleccionado.set(empresa.almacenes[0]);

    this.menuEmpresaAbierto.set(false);

  }

  protected seleccionarAlmacen(almacen: Almacen): void {

    this.almacenSeleccionado.set(almacen);

    this.menuAlmacenAbierto.set(false);

  }

  protected irInicio(): void {

    // Pendiente de integrar con Router.

  }

  protected readonly servicioMenu = inject(MenuLateralService);
  
  protected alternarMenu(): void {

    this.servicioMenu.alternarMenu();

  }

}