import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./components/about.component";
import {DashboardComponent} from "./components/dashboard";
import {LoginComponent} from "./components/login/login.component";


const appRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);