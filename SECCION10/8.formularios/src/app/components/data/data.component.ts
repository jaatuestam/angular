import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;
  usuario:Object = {
    nombrecompleto :{
      nombre: "Jorge",
      apellido : "Atuesta"
    },
    correo : "aaa@ddd.com"
  }

  constructor( ) {
    this.forma = new FormGroup({

      'nombrecompleto' : new FormGroup({
        'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
        'apellido' : new FormControl('',Validators.required)
      }),
      'correo' : new FormControl('',[Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });

    this.forma.setValue(this.usuario);
  }


  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    this.forma.reset({
      nombrecompleto : {
        nombre : "",
        apellido : ""
      },
      correo : "nuevocorre@corre.com"
    });
  }



}
