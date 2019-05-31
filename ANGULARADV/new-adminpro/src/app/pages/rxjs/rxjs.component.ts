import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
// tslint:disable-ne,xt-line: import-blacklist


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {


  subscription: Subscription;

  constructor() {

      this.subscription = this.retornarObservable().pipe(
        retry(2)
      ).subscribe(
        numero => console.log('Subs: ' ,  numero),
        error => console.error('Error: ' , error),
        () => console.log('Tarea completada')
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Va a salir de la pagina');
  }

  retornarObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;

        const salida: any = {
          valor : contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Error al procesar el observador');
        // }
      }, 1000);
    }).pipe(
      map( resp =>  resp.valor),
      filter( (valor, index) => {
        if ((valor % 2) === 0) {
           return false;
        }
        return true;
      })
    );
  }

}
