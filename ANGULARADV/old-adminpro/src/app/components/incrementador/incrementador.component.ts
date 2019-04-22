import { Component, OnInit } from '@angular/core';
import { ViewChild,Input,Output,EventEmitter,ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso:number = 50;
  @Input('nombre') leyenda:string = "Leyenda";

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number){
    if(this.progreso + valor > 100 || this.progreso + valor < 0){
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChange(event:number){
    // let elementHTML  : any= document.getElementsByName('progreso')[0];
    if(event >100){
      this.progreso = 100;
    }else if(event < 0){
      this.progreso = 0;
    }else{
      this.progreso = event;
    }
    // elementHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
}
