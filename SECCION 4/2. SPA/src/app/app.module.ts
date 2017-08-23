import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {HeroesService} from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
