import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/interfaces/heroe.interface';
import  'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL : string = "https://heroesapp-7328f.firebase.com/Heroes.json";
  heroeURL : string = "https://heroesapp-7328f.firebaseio.com/Heroes/";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-Type' : "application/json"
    });
    return this.http.post(this.heroesURL,body,header).map(res=>{
      console.log(res.json());
      return res.json();
    });
  }

  actualizarHeroe(heroe:Heroe,key$:string){
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-Type' : "application/json"
    });
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.put(url,body,header).map(res=>{
      console.log(res.json());
      return res.json();
    });
  }

  getHeroe(key$:string){
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.get(url).map(res => res.json());
  }

  getHeroes(){
    return this.http.get(this.heroesURL).map(res => res.json());
  }

  eliminarHeroe(key$:string){
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url).map(res => res.json());
  }

}
