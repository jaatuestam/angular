import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children : [
      { path: 'dashboard', component: DashboardComponent,data:{titulo:'Dashboard'} },
      { path: 'progress', component: ProgressComponent,data:{titulo:'Progress Bars'} },
      { path: 'graficas1', component: Graficas1Component, data:{titulo:'Graficas'}},
      { path: 'account-settings', component: AccountSettingsComponent,data:{titulo:'Ajustes de tema'} },
      { path: 'promesas', component: PromesasComponent,data:{titulo:'Promesas'} },
      { path: 'rxjs', component: RxjsComponent,data:{titulo:'Rxjs'} },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
