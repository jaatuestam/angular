import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  buscar:string = "";

  constructor(private peliculaService : PeliculasService, private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(parametros => {
        if(parametros['texto']){
          this.buscar = parametros['texto'];
          this.buscarPelicula();
        }
      });
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }
    this.peliculaService.buscarPelicula(this.buscar).subscribe();
  }

}
