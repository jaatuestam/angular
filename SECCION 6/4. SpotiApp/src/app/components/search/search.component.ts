import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getArtistas("metallica").subscribe();
  }

}
