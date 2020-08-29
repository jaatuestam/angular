import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ResponseContentType } from '@angular/http/src/enums';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes : any;
  loading : boolean = true;

  constructor(private heroesService:HeroesService) {

    this.heroesService.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
      this.loading = false;
    })
  }

  ngOnInit() {
  }

  downloadPDF(): any {
    window.open('http://localhost:8080/downloadPDF','_blank');
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
