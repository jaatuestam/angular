import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public populares : Pelicula[] = [];
  public popularesKids : Pelicula[] = [];
  public teatros : Pelicula[] = null;
  private urlImagen : string = "http//image.tmdb.org/t/p/w300";

  constructor(private _ps:PeliculasService ){
    this._ps.getPopulares().subscribe(data => {
      console.log(data);
      this.populares = data;
    });
    this._ps.getPopularesKids().subscribe(data => this.popularesKids = data);
    this._ps.getEnTeatros().subscribe(data => this.teatros = data);
  }

  ngOnInit() {
  }

  verDetalle(id:string){
    console.log(id);
  }

}
