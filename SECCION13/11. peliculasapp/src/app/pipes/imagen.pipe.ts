import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string): string {
    let noimage = "assets/noimage.png";
    if(!value){
      return noimage;
    }
    return `https://image.tmdb.org/t/p/w300${value}`;
  }

}
