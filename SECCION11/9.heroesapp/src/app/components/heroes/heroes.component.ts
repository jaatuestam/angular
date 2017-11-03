import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes : any;

  constructor(private heroesService:HeroesService) {

    this.heroesService.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    })
  }

  ngOnInit() {
  }

  eliminarHeroe(key$:string){
    this.heroesService.eliminarHeroe(key$).subscribe(data =>{
      console.log(data);
      if(data){
        console.error(data);
      }else{
        delete this.heroes[key$];
      }
    })
  }

}
