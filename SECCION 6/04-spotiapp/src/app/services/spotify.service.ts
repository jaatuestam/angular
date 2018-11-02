import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url = 'https://api.spotify.com/v1/';

  token = 'BQCUy_hKAOSJcE_Cr9WIu_6oypwtcFGuJqTbpTMZ37n08pAXQAIk0H0YJox_UXly8KG-GgxgKGvJ3gLmYVQ';

  constructor(private http:HttpClient) { }
  

  private getQuery(query:string){
    const headers :HttpHeaders = new HttpHeaders ({
      'Authorization' : `Bearer ${this.token}`
    });
    let url = `${this.url}${query}`;
    return this.http.get(url,{headers})
    
  }

  consultarNuevosLanzamientos(){
    return this.getQuery("browse/new-releases?limit=30").pipe(map(data =>data['albums'].items));
  }

  buscarArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map( data =>{
                    return data['artists'].items;
                  }));
  }

  buscarArtista(artistaID:string){
    return this.getQuery(`artists/${artistaID}`);
  }

  obtenerTopTracks(artistaID:string){
    return this.getQuery(`artists/${artistaID}/top-tracks?country=ES`).
              pipe(map(data =>{
                return data['tracks'];
              }));
  }

}
