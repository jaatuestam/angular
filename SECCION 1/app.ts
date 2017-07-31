function activate(nombre:string,sexo:string = "mujer", edad?:number){
  if(edad){
    console.log(`${nombre} es un(a) ${sexo} y tiene (${edad}) años`);
  }else{
    console.log(`${nombre} es un(a) ${sexo}`);
  }
}

activate("Jorge","hombre",232);
