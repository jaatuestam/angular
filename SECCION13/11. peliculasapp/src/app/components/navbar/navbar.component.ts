import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  buscarPelicula(valor:string){
    if(valor.length == 0){
      return;
    }

    this.router.navigate(['busqueda',valor]);

  }
}
