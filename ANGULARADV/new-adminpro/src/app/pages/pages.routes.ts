import { Routes, RouterModule } from '@angular/Router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [

    {
        path: '' ,
        component : PagesComponent,
        children : [
            { path : 'dashboard', component : DashboardComponent, data : {titulo : 'Dashboard'} },
            { path : 'graficas1', component : Graficas1Component , data : {titulo : 'Graficas'}},
            { path : 'progress', component : ProgressComponent , data : {titulo : 'Barra de progreso'}},
            { path : 'promesas', component : PromesasComponent, data : {titulo : 'Promesas'}},
            { path : 'account-settings', component : AccountSettingsComponent , data : {titulo : 'Ajuste de sistema'}},
            { path : 'rxjs', component : RxjsComponent , data : {titulo : 'RxJS'}},
            { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
