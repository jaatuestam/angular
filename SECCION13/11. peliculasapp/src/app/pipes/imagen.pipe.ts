import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pelicula:any): any {
    let url = "https://image.tmdb.org/t/p/w600"
    if(pelicula.backdrop_path){
      return url + pelicula.backdrop_path;
    }
    if(pelicula.poster_path){
      return url + pelicula.poster_path;
    }
    let noimage = "assets/noimage.png";
    return noimage;

    // return `https://image.tmdb.org/t/p/w300${value}`;
  }

}
