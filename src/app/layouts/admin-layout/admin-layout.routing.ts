import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',canActivate:[AuthGuard],   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path:"administrador",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/administrador/administrador.module').then(m => m.AdministradorModule)
    },
    {path:"departamentos",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/departamentos/departamentos.module').then(m => m.DepartamentosModule)
    },{path:"cliente",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/cliente/cliente.module').then(m => m.ClienteModule)
    },{path:"conductor",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/conductor/conductor.module').then(m => m.ConductorModule)
    },
    {path:"servicios",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/servicios/servicios.module').then(m => m.ServiciosModule)
    },
    {path:"servi",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/servi/servi.module').then(m => m.ServiModule)
    },
    {path:"traslados",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/traslados/traslados.module').then(m => m.TrasladosModule)
    },
    {path:"cremaciones",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/cremaciones/cremaciones.module').then(m => m.CremacionesModule)
    },
    {path:"sepulturas",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/sepulturas/sepulturas.module').then(m => m.SepulturasModule)
    },
    {path:"comentarios",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/comentarios/comentarios.module').then(m => m.ComentariosModule)
    },
    {path:"ejecucion-servicio",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/ejecucion-servicio/ejecucion-servicio.module').then(m => m.EjecucionServicioModule)
    },
    {path:"chats",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/chats/chats.module').then(m => m.ChatsModule)
    },
    {path:"mensajes",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/mensajes/mensajes.module').then(m => m.MensajesModule)
    },
    {path:"suscripciones",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/suscripciones/suscripciones.module').then(m => m.SuscripcionesModule)
    },
    {path:"pagos",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/pagos/pagos.module').then(m => m.PagosModule)
    },
    {path:"planes",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/planes/planes.module').then(m => m.PlanesModule)
    },
    {path:"ciudades",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/ciudades/ciudades.module').then(m => m.CiudadesModule)
    },
    {path:"sede",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/sede/sede.module').then(m => m.SedeModule)
    },
    {path:"sala",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/sala/sala.module').then(m => m.SalaModule)
    },
    {path:"tipo",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/tipo/tipo.module').then(m => m.TipoModule)
    },
    {path:"musica",
        canActivate:[AuthGuard],
    loadChildren: () => import('src/app/pages/musica/musica.module').then(m => m.MusicaModule)
    },
    {path:"feretro",
        canActivate:[AuthGuard],
        loadChildren: () => import('src/app/pages/feretro/feretro.module').then(m => m.FeretroModule)
        }
];
