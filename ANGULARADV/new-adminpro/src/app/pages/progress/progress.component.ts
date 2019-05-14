import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 10;
  progreso2: number = 20;


  constructor() { }

  ngOnInit() {
  }

  // cambiarValor(valor: number) {
  //   if (this.progreso <= 0 && valor < 0) {
  //     return;
  //   }
  //   if (this.progreso >= 100 && valor > 0) {
  //     return;
  //   }
  //   this.progreso += valor;
  // }

}
