import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo : 'Dashboard',
      icono : 'mdi mdi-gauge',
      submenu : [
        {
          titulo : 'Main',
          ruta : '/'
        },
        {
          titulo : 'ProgressBar',
          ruta : 'progress'
        },
        {
          titulo : 'Graficas',
          ruta : 'grafica1'
        }
      ]
    }
  ];

  constructor() { }
}
