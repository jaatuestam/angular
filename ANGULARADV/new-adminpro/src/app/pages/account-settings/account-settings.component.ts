import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsServices: SettingsService) { }

  ngOnInit() {
    this.initLink();
  }

  cambiarTema( tema: string, link: any) {
    this.aplicarLink( link );
    this.settingsServices.aplicarTema(tema);
  }

  aplicarLink( link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  initLink() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.settingsServices.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
