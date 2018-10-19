import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

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

  constructor(public youtubeService:YoutubeService) {
    this.youtubeService.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos = videos;      
    });
   }

  ngOnInit() {
  }

  verVideo(video:any){
    console.log(video);
    
  }

}
