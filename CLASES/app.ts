export class Figura{
  nombre:string;
  lados:number = 0;
  angulos:number = 0;

  constructor(nombre:string,lados:number){
    console.log("Se ejecuto el constructor");
    this.nombre = nombre;
    this.lados = lados;
  }
}

let cuadro : Figura = new Figura("cuadro", 4 );

console.log(cuadro);
