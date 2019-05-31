import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/Router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
      this.getDataRoute().subscribe(data => {
        console.log(data);
        this.titulo = data.titulo;
        title.setTitle(this.titulo);
        const metaDefinition: MetaDefinition = {
          name : 'definition',
          value : this.titulo
        };
        meta.addTag(metaDefinition);
      });
  }

  ngOnInit() {
  }

  getDataRoute(): Observable<any>{
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd ) => evento.snapshot.data )
    );
  }

}
