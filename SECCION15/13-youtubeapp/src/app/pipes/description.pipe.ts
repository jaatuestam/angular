import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(texto: string): any {
    return `${texto.substr(0,75)}...`;
  }

}
