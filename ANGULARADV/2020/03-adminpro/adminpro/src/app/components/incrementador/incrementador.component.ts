import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{


  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') modificarValor : EventEmitter<number> = new EventEmitter();

  getPorcentaje ( valor: number) {
    return `${this.progreso}%`;
  }

  cambiarValor (valor: number){
    if (this.progreso >= 100 && valor > 0) {
      this.modificarValor.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.modificarValor.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.modificarValor.emit(this.progreso);
  }

  onChange(nuevoValor : number){
    if(nuevoValor >=100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else {
      this.progreso = nuevoValor;
    }
    this.modificarValor.emit(this.progreso);
  }

}
