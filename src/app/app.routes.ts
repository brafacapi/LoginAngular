import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';
import { ReservasListadoComponent } from './reservas/reservas-listado/reservas-listado.component'
import { ReservasDetalleComponent } from './reservas/reservas-detalle/reservas-detalle.component';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'usuarios', component: FormUsuariosComponent},
    {path: 'protect',
        component: ProtectedComponent,
        canActivate: [UsuarioLogueadoGuard]
    },
    {path: 'listado',
        component: ReservasListadoComponent,
        canActivate: [UsuarioLogueadoGuard]
    },
    {path: 'listado-detalle',
        component: ReservasDetalleComponent,
        canActivate: [UsuarioLogueadoGuard]
    }
];
