import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { redirectAutoLoginGuard } from './guards/redirect-auto-login.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [redirectAutoLoginGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [loginGuard]
    }
];
