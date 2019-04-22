import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input("labels") public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input("data") public doughnutChartData:number[] = [350, 450, 100];
  @Input("type") public doughnutChartType:string = 'doughnut';
  @Input("leyenda") public leyenda:string = '';

  constructor() { }

  ngOnInit() {
  }

}
