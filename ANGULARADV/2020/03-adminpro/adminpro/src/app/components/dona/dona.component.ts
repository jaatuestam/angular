import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title = 'Sin titulo';
  @Input() data;
  @Input() labels;

  doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {backgroundColor : ['#6958E6' , '#009FEE' , '#F02059']}
  ];

}
