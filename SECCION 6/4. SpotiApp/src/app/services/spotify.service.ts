import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";


  constructor(private http:Http) { }

  getArtistas(termino : string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCeH5SM4OZEIcQ3dwPPZUTN5r45yKD8IGgjjqFFrHE6EQas_xNJwnDwjgHR7Op5t02Q1ZUlgWpnaSY-oGUyCQ')
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url,{headers}).map(res => {
      // console.log(res.json().artists.items );
      this.artistas = res.json().artists.items;
      // return res.json().artists.items;

    });

  }

}
