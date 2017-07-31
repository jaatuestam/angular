let avenger = {
  nombre : "Peter",
  clave : "Spiderman",
  poder : "trepar"
}


let { clave, nombre, poder} = avenger;

console.log(nombre, clave, poder);

let frutas:string[] = ["pera", "manzana", "lulo"]

let[,,tercera] = frutas;

console.log(tercera);
