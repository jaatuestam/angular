import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private  linkTheme = document.querySelector("#theme");

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/blue.css';
    this.linkTheme.setAttribute('href' , theme);
  }

  changeTheme(theme: string): void  {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href' , urlTheme);
    localStorage.setItem('theme' , urlTheme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{

    const links = document.querySelectorAll('.selector');
    links.forEach ( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }

}
