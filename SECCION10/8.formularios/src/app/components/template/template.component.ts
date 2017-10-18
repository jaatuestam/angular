import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: "Jorge",
    apellido : "Atuesta",
    correo: ""
  }

  constructor() { }

  guardar(forma:NgForm){
    console.log("ngForm " , forma);
    console.log("valor forma" , forma.value);
    console.log("usuario " , this.usuario);
  }

}
