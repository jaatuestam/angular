import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() public data : string;
  @Input() public label : string;
  @Input() public charType : string;

  constructor() { }

  ngOnInit() {
  }

}
