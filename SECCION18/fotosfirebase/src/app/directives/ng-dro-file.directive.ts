import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { FileItem } from '../models/file-item.model';

@Directive({
  selector: '[appNgDroFile]'
})
export class NgDroFileDirective {

  @Input() archivos : FileItem [] = [];
  @Output() mouseSobre : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event:any){
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }
  
  @HostListener('dragleave', ['$event'])
  public onDragLeave(event:any){
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event:any){

    const transferencia = this._getTransferencia(event);

    if(!transferencia){
      return;
    }

    this._extraerArchivos(transferencia.files);
    this._prevenirDetener(event);

    this.mouseSobre.emit(false);
  }

  private _extraerArchivos(archivosLista : FileList){
    // console.log(archivosLista);

    //Pasar un objeto a un arreglo
    for(const propiedad in Object.getOwnPropertyNames(archivosLista)){
      const archivoTemporal = archivosLista[propiedad];
      
      if(this._puedeCargarse(archivoTemporal)){
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);

      }
    }
    console.log("arreglo", this.archivos);

    
    
  }

  private _getTransferencia(event:any){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  //Validaciones
  private _puedeCargarse(archivo : File){
    if(!this._archivoYaCargado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    }
    return false;
  }


  private _prevenirDetener(event){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaCargado(nombreArchivo:string){
    for (const archivo of this.archivos) {
      if(archivo.nombreArchivo === nombreArchivo){
        console.log("El archivo " + nombreArchivo + " ya fue agregado");
        return true;
      }
    }
  }

  private _esImagen(tipoArchivo:string){
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false: tipoArchivo.startsWith('image');
  }

}
