import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LOCALE_ID} from '@angular/core';
import {CapitalizadoPipe} from './pipe/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue : "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
