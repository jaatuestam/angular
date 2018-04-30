import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  constructor(private router:Router) {
    this.router.events
    .subscribe(evento =>{
      console.log(evento)
    });
  }

  ngOnInit() {
  }

}
