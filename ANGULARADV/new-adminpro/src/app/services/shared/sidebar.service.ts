import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [
    {
      titulo: 'Principal',
      icono : 'mdi mdi-gauge',
      submenu : [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'ProgressBar',
          url: '/progress'
        },
        {
          titulo: 'Graficas',
          url: '/graficas1'
        },
        {
          titulo: 'Promesas',
          url: '/promesas'
        },
        {
          titulo: 'RxJS',
          url: '/rxjs'
        }
      ]
    }
  ];

  constructor() { }
}
