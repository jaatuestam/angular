import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  artista:any;
  topTracks :any[] = [];
  loading:boolean = true;

  constructor(private route:ActivatedRoute,private spotify:SpotifyService) { 
    this.loading = true;
    this.route.params.subscribe(params =>{
      spotify.buscarArtista(params['id']).subscribe(data => 
        { 
          this.artista = data
          this.getTopTracks(params['id']);
          this.loading = false;
        });
    })
  }

  getTopTracks(artistaID:string){
    this.spotify.obtenerTopTracks(artistaID).subscribe(data =>{
      this.topTracks = data;
      console.log(data);
      
    });
  }


}
