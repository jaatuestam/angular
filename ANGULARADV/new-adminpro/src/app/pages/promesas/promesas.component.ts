import { Component, OnInit } from '@angular/core';
import { containsTree } from '@angular/Router/src/url_tree';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    const promesa = new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval (() => {
         if (contador === 3) {
          //  resolve('OK');
           reject('Error');
           clearInterval(intervalo);
         }
         console.log(contador);
         contador++;
      }, 1000);
    });

    promesa.then((mensaje) => {
      console.log('Termino ' , mensaje);
    }).catch ((error) => {
      console.log('ocurrio un error ' , error);
    });

    this.contartres().then((mensaje) => {
      console.log('Termino ' , mensaje);
    }).catch ((error) => {
      console.log('ocurrio un error ' , error);
    });
  }

  ngOnInit() {
  }

  contartres(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval (() => {
         if (contador === 3) {
           resolve(true);
          //  reject('Error');
           clearInterval(intervalo);
         }
         console.log(contador);
         contador++;
      }, 1000);
    });
  }

}
