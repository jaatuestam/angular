export class FileItem{
    public archivo :File;
    public nombreArchivo:string;
    public cargando : boolean;
    public url : string;
    public progreso : number;

    constructor(archivo:File){
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.cargando = false;
        this.progreso = 0;
    }
}