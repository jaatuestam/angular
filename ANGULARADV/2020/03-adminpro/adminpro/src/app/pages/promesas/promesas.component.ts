import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  public usuarios: any;

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }

  getUsuarios(): Promise<any>{

    return new Promise (resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(resp => resolve(resp.data));
    });
  }

}
