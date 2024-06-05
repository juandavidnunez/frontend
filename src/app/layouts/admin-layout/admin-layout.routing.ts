import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path:"administrador",
    loadChildren: () => import('src/app/pages/administrador/administrador.module').then(m => m.AdministradorModule)
    },
    {path:"departamentos",
    loadChildren: () => import('src/app/pages/departamentos/departamentos.module').then(m => m.DepartamentosModule)
    },
    {path:"servicios",
    loadChildren: () => import('src/app/pages/servicios/servicios.module').then(m => m.ServiciosModule)
    },
    {path:"traslados",
    loadChildren: () => import('src/app/pages/traslados/traslados.module').then(m => m.TrasladosModule)
    },
    {path:"cremaciones",
    loadChildren: () => import('src/app/pages/cremaciones/cremaciones.module').then(m => m.CremacionesModule)
    },
    {path:"sepulturas",
    loadChildren: () => import('src/app/pages/sepulturas/sepulturas.module').then(m => m.SepulturasModule)
    },
    {path:"comentarios",
    loadChildren: () => import('src/app/pages/comentarios/comentarios.module').then(m => m.ComentariosModule)
    },
    {path:"ejecucion-servicio",
    loadChildren: () => import('src/app/pages/ejecucion-servicio/ejecucion-servicio.module').then(m => m.EjecucionServicioModule)
    },
    {path:"chats",
    loadChildren: () => import('src/app/pages/chats/chats.module').then(m => m.ChatsModule)
    },
    {path:"mensajes",
    loadChildren: () => import('src/app/pages/mensajes/mensajes.module').then(m => m.MensajesModule)
    },
    {path:"suscripciones",
    loadChildren: () => import('src/app/pages/suscripciones/suscripciones.module').then(m => m.SuscripcionesModule)
    },
    {path:"pagos",
    loadChildren: () => import('src/app/pages/pagos/pagos.module').then(m => m.PagosModule)
    },
    {path:"planes",
    loadChildren: () => import('src/app/pages/planes/planes.module').then(m => m.PlanesModule)
    }
];
