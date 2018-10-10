// export class Marcador{

//     constructor(public lat: number, public len:number){

//     }
// }

export class Marcador{
    public lat:number;
    public len:number;
    public titulo:string = "Sin Titulo";
    public desc : string = "Sin Descripcion";

    constructor(lat:number,len:number){
        this.lat = lat;
        this.len = len;
    }
}