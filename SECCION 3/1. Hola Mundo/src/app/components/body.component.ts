import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'

})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje : "Este es el mensaje de la prueba",
    autor : "Jorge Atuesta"
  }

  frutas:string[] = ["mango", "pina", "melon"]
}
