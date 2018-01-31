import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes : Ajustes = {
      temaUrl : "assets/css/colors/red-dark.css",
      tema : "red-dark"
  }
  constructor(@Inject(DOCUMENT) private documento) {
    this.cargarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`
    this.documento.getElementById('theme').setAttribute('href', url );
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes{
  temaUrl:string;
  tema:string;
}
