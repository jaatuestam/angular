import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.example-card {
      max-width: 400px;
      margin-bottom: 15px;
    }
    
    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }`
  ]
})
export class HomeComponent implements OnInit {

  private videos : any[]= []

  constructor(public youtubeService:YoutubeService,public dialog: MatDialog) {
    
    
    
    this.youtubeService.getVideos().subscribe(videos => {
      this.videos = videos;      
    });



   }

  ngOnInit() {
  }

  cargarMas(){
    this.youtubeService.getVideos().subscribe(videos => {
      this.videos.push.apply(this.videos,videos);      
    });
  }

  verVideo(video:any){
    console.log(video);
    
    const dialogRef = this.dialog.open(VideoComponent, {
      width: '640px',
      height: '430px',
      data: {titulo: video.title, codigo : video.resourceId.videoId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      video = null;
    });
    
  }

}
