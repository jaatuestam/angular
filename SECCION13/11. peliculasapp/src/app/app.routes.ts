import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BusquedaComponent} from './components/busqueda/busqueda.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
