import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso : number = 20;
  progreso2 : number = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event:number){
    this.progreso=event;
  }
}
