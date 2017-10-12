import { Component, OnInit,OnChanges,DoCheck,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>

  <br><br>
  <p [appResaltado]="'cyan'">
     Hola mundo directive
  </p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked,OnDestroy  {

  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
