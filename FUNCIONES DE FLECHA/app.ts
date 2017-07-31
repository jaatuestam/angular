let miFuncion = function (a:string){
  return a;
}

let miFuncionF = (a:string) => a;

let miFuncion2 = function(a:number, b:number){
  return a+b;
}

let miFuncion2F = (a:number,b:number) => a+b;

console.log(miFuncion("Jorge"));

console.log(miFuncionF("Andres"));

console.log(miFuncion2(1,2));

console.log(miFuncion2F(3,4));



let miFuncion3 = function(a:string){
  a.toUpperCase();
  return a;
}

let miFuncion3F = (a:string)=>{
  a = a.toUpperCase();
  return a;
}

console.log(miFuncion3F("El Barto"));


let hulk = {
  nombre : "Hulk",
  golpe(){
    setTimeout(()=>console.log(this.nombre + " golpea"),1500)
  }
}

hulk.golpe();
