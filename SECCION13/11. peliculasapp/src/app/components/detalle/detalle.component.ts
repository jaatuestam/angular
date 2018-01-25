import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  pelicula:Pelicula;

  constructor(private peliculaService : PeliculasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
        this.peliculaService.obtenerDetalle(parametros['id']).subscribe( pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula;
        })
    });
  }

  ngOnInit() {
  }



}
