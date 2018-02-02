import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable().retry(2).subscribe(
      numero=>console.log('Subs ',numero),
      error=>console.error('Error ', error),
      ()=>console.log('Termino')
    );
  }

  ngOnInit() {
  }

  regresaObservable():Observable<number>{
    return new Observable( observer =>{
        let contador = 0;
        let intervalo = setInterval(()=>{
          observer.next(contador+=1);
          if(contador===3){
            clearInterval(intervalo);
            observer.complete();
          }
          if(contador ===2){
            observer.error('Se daño');
          }
        },1000);
    });
  }

}
