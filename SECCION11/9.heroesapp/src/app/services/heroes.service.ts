import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/interfaces/heroe.interface';
import  'rxjs/Rx';

@Injectable()
export class HeroesService {

  fireURL : string = "https://heroesapp-7328f.firebaseio.com/Heroes.json";
  heroeURL : string = "https://heroesapp-7328f.firebaseio.com/Heroes/";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-Type' : "application/json"
    });
    return this.http.post(this.fireURL,body,header).map(res=>{
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

}
