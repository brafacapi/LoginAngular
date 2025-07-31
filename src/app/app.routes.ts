import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'protect',
        component: ProtectedComponent,
        canActivate: [UsuarioLogueadoGuard]
    }
];
