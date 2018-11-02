import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  lanzamientos : any = [];
  loading : boolean= false;
  error:boolean=false;
  mensajeError = '';

  constructor(public _spotify: SpotifyService) { }

  ngOnInit() {
    this.loading = true;
    this._spotify.consultarNuevosLanzamientos().subscribe((data:any) =>{
      this.lanzamientos = data;
      this.loading = false;
    }
    ,(errorServicio) =>{
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message; 
    });
  }

}
