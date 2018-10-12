import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { YoutubeService } from './services/youtube.service';
import { YoutubePipe } from './pipes/youtube.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubePipePipe,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [YoutubeServiceService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
