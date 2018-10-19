import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { YoutubeService } from './services/youtube.service';
import { YoutubePipe } from './pipes/youtube.pipe';
import { HttpModule } from "@angular/http";
import { DescriptionPipe } from './pipes/description.pipe';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubePipe,
    DescriptionPipe,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
