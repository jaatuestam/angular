import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, mostrar:boolean = true): string {
    let asteris:string  = "";
    for(let i in value){
      asteris = asteris + " * ";
    }
    if(mostrar){
      return asteris;
    }else{
      return value;
    }
  }

}
