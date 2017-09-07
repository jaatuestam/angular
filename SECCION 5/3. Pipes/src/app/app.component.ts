import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Scizor';
  nombre2 = 'jOrge andres aTuesTA maesTRe'
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a :number = 0.234;
  salario : number = 1234.5;

  equipo = {
    nombre : "America de cali",
    fundacion : "1927",
    ciudad : "Cali",
    formacion : {
      arquero : "bejarano",
      defensas : {
        lateral:"velez",
        central1 : "herner",
        central2 : "castañeda",
        lateral2:"angulo"
      }
    }
  };

  valorDePromesa = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Llego el dato'),3500)
  });

  fecha = new Date();

  video = "Hupj8qXuOLI";

  contrasena = "union123";

  mostrar = true;
}
