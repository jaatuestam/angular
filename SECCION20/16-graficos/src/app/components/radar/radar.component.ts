import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent  {

  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running','Jumping'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40,90], label: 'Courtuois'},
    {data: [28, 48, 40, 19, 96, 27, 100,12], label: 'De Gea'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
