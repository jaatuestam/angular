import { Component, OnInit } from '@angular/core';
import { NgForm }from "@angular/forms";
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre : "",
    bio : "",
    casa : "DC"
  }

  nuevo:boolean = false;
  id:string;


  constructor(private heroeService : HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {

     this.activatedRoute.params.subscribe(parametros=>this.id = parametros['id']);
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
    if(this.id == "nuevo"){
      this.heroeService.nuevoHeroe(this.heroe).subscribe(data=>{
        this.router.navigate(['/heroe',data.name])
      },error=>{console.log(error)});
    }else{
      this.heroeService.actualizarHeroe(this.heroe,this.id).subscribe(data=>{
        this.router.navigate(['/heroe',data.name])
      },error=>{console.log(error)});
    }
  }

}
