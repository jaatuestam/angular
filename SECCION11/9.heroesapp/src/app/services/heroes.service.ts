import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/interfaces/heroe.interface';
import  'rxjs/Rx';

@Injectable()
export class HeroesService {

  fireURL : string = "https://heroesapp-7328f.firebaseio.com/Heroes.json";

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

}
