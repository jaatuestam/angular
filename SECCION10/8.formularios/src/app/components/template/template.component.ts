import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
    }
    `]
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: null,
    apellido : null,
    correo: null,
    pais:"",
    sexo:"Hombre",
    acepta:false
  }

  sexos : string[]=["Hombre", "Mujer","Sin definir"];

  paises =[
    {
      codigo : "COP",
      nombre: "Colombia"
    },
    {
      codigo : "BRA",
      nombre: "Brasil"
    }
  ]

  constructor() { }

  guardar(forma:NgForm){
    console.log("ngForm " , forma);
    console.log("valor forma" , forma.value);
    console.log("usuario " , this.usuario);
  }

}
