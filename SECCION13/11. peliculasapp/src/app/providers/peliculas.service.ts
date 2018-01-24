import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Pelicula } from '../interfaces/pelicula.interface';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {


  private apiKey:string = "3f2f49dd598576fe19f3fc55675f0ff8";
  private urlMovieDB:string = "https://api.themoviedb.org/3";
  peliculas:Pelicula[] = [];

  constructor(private jsonP : Jsonp) { }


  getPopulares(){
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res =>res.json().results);
  }

  getPopularesKids(){
     let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
     return this.jsonP.get(url).map(res =>res.json().results);
  }

  getEnTeatros(){
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desde = new Date();
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`
    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res =>res.json().results);
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMovieDB}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonP.get(url).map(res => {
      this.peliculas = res.json().results
      console.log(this.peliculas);
      return res.json().results
    });
  }

  obtenerDetalle(id:string){
    let url = `${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonP.get(url).map(res => res.json());
  }


}
