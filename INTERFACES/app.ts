
interface Carne {
    tipo:string,
    peso:number
}

function cocinar(carne:Carne){
  console.log("Cocinando la carne de " + carne.tipo);
};

function fritar(carne:Carne){
  console.log(`Fritando la carne de ${carne.tipo}`);
};

let carne:Carne = {
  tipo : "Res",
  peso : 15
};

cocinar(carne);
fritar(carne);
