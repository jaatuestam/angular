import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private playlist ="UU_x5XG1OV2P6uZZ5FSM9Ttw";
  private apiKey = "AIzaSyAXnlKnqhGkMsyhlztpQNx5Xsa-cU44oGQ";
  private nextPageToken = "";

  constructor(public http: Http) { }
  
  getVideos(){
    
    let params:URLSearchParams = new URLSearchParams();
    params.set('part','snippet');
    params.set('maxResults','12');
    params.set('playlistId',this.playlist);
    params.set('key',this.apiKey);
    let url = `${this.youtubeUrl}/playlistItems`;
    return this.http.get(url, {search : params})
          .map(res =>{
              // console.log(res.json());
              this.nextPageToken = res.json().nextPageToken;
              let videos:any[] = [];
              for(let video of res.json().items){
                let snippet = video.snippet;
                videos.push(snippet);
              }
              return videos;
    });
  }
}
