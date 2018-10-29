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
  }
  
  @HostListener('dragleave', ['$event'])
  public onDragLeave(event:any){
    this.mouseSobre.emit(false);
  }

  //Validaciones
  private _puedeCargarse(archivo : File){
    if(!this._archivoYaCargado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    }
    return false;
  }


  private _prevenirApertura(event){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaCargado(nombreArchivo:String){
    for (const archivo of this.archivos) {
      if(archivo.nombreArchivo === nombreArchivo){
        console.log("El archivo " + nombreArchivo + " ya fue agregado");
        return true;
      }
      return false;
    }
  }

  private _esImagen(tipoArchivo:string){
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false: tipoArchivo.startsWith('image');
  }

}
