import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy  {
  titulo: any;
  private tituloSubs$: Subscription;


  constructor(private router: Router) {
    this.tituloSubs$ = this.obtenerDatosRuta().subscribe( ({titulo}) => {
      this.titulo = titulo,
      document.title = `AdminPro - ${titulo}`;
    });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }



  obtenerDatosRuta(): Observable<any>{
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data),
    );
  }


}
