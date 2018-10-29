export class FileItem{
    public archivo :File;
    public nombreArchivo:String;
    public cargando : boolean;
    public url : String;
    public progreso : number;

    constructor(archivo:File){
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.cargando = false;
        this.progreso = 0;
    }
}