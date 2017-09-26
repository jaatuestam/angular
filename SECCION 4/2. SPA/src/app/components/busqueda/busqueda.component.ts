import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  termino : string;
  heroesArray : Heroe[];

  constructor(private activateRoute : ActivatedRoute, private _heroeService : HeroesService,private router:Router) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroesArray = this._heroeService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe',index]);
  }

}
