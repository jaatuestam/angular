import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtIncrementador') txtIncrementador: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 10;

  @Output('actualizaValor') cambiaValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number) {

    // const elementHTML: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elementHTML.value = this.progreso;
    this.txtIncrementador.nativeElement.value = this.progreso;
    this.cambiaValor.emit(this.progreso);
    this.txtIncrementador.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.progreso <= 0 && valor < 0) {
      return;
    }
    if (this.progreso >= 100 && valor > 0) {
      return;
    }
    this.progreso += valor;
    this.cambiaValor.emit(this.progreso);
  }

}
