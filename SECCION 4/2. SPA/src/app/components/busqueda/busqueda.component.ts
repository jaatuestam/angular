import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  termino : string;
  heroesArray : Heroe[];

  constructor(private activateRoute : ActivatedRoute, private _heroeService : HeroesService) {
    this.activateRoute.params.subscribe( params => {
      this.termino = this._heroeService.getHeroe(params['termino']);
    })
  }

  ngOnInit() {
    this.heroesArray =  this._heroeService.buscarHeroes(this.termino);
  }

}
