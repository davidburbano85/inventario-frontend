import { Menu } from '../modelos/menu.model';

export const MENU: Menu = {
  grupos: [
    {
      id: 'principal',
      titulo: 'Principal',
      icono: 'dashboard',
      expandido: true,
      items: [
        {
          id: 'dashboard',
          titulo: 'Dashboard',
          icono: 'dashboard',
          ruta: '/dashboard'
        }
      ]
    },
    {
      id: 'empresa',
      titulo: 'Empresas',
      icono: 'business',
      items: [
        {
          id: 'empresas',
          titulo: 'Empresas',
          icono: 'apartment',
          ruta: '/empresas'
        },
        {
          id: 'sucursales',
          titulo: 'Sucursales',
          icono: 'account_tree',
          ruta: '/empresas/sucursales'
        }
      ]
    },
    {
      id: 'inventario',
      titulo: 'Inventario',
      icono: 'inventory_2',
      items: [
        {
          id: 'productos',
          titulo: 'Productos',
          icono: 'inventory',
          ruta: '/inventario/productos'
        },
        {
          id: 'categorias',
          titulo: 'Categorías',
          icono: 'category',
          ruta: '/inventario/categorias'
        },
        {
          id: 'marcas',
          titulo: 'Marcas',
          icono: 'branding_watermark',
          ruta: '/inventario/marcas'
        },
        {
          id: 'almacenes',
          titulo: 'Almacenes',
          icono: 'warehouse',
          ruta: '/inventario/almacenes'
        },
        {
          id: 'existencias',
          titulo: 'Existencias',
          icono: 'inventory',
          ruta: '/inventario/existencias'
        },
        {
          id: 'movimientos',
          titulo: 'Movimientos',
          icono: 'swap_horiz',
          ruta: '/inventario/movimientos'
        }
      ]
    },
    {
      id: 'compras',
      titulo: 'Compras',
      icono: 'shopping_cart',
      items: [
        {
          id: 'compras',
          titulo: 'Compras',
          icono: 'shopping_cart',
          ruta: '/compras'
        },
        {
          id: 'proveedores',
          titulo: 'Proveedores',
          icono: 'local_shipping',
          ruta: '/proveedores'
        }
      ]
    },
    {
      id: 'ventas',
      titulo: 'Ventas',
      icono: 'point_of_sale',
      items: [
        {
          id: 'ventas',
          titulo: 'Ventas',
          icono: 'receipt_long',
          ruta: '/ventas'
        },
        {
          id: 'clientes',
          titulo: 'Clientes',
          icono: 'groups',
          ruta: '/clientes'
        }
      ]
    },
    {
      id: 'administracion',
      titulo: 'Administración',
      icono: 'admin_panel_settings',
      items: [
        {
          id: 'usuarios',
          titulo: 'Usuarios',
          icono: 'person',
          ruta: '/usuarios'
        },
        {
          id: 'roles',
          titulo: 'Roles',
          icono: 'badge',
          ruta: '/roles'
        },
        {
          id: 'permisos',
          titulo: 'Permisos',
          icono: 'lock',
          ruta: '/permisos'
        }
      ]
    },
    {
      id: 'configuracion',
      titulo: 'Configuración',
      icono: 'settings',
      items: [
        {
          id: 'parametros',
          titulo: 'Parámetros',
          icono: 'tune',
          ruta: '/configuracion'
        },
        {
          id: 'auditoria',
          titulo: 'Auditoría',
          icono: 'history',
          ruta: '/configuracion/auditoria'
        }
      ]
    },
    {
      id: 'reportes',
      titulo: 'Reportes',
      icono: 'bar_chart',
      items: [
        {
          id: 'reportes',
          titulo: 'Reportes',
          icono: 'assessment',
          ruta: '/reportes'
        }
      ]
    }
  ]
};