import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { log } from 'util';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent{

  titulo:string;
  codigo:string;

  constructor(
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("desde edicion " + data.codigo);
      this.titulo = data.titulo;
      this.codigo = data.codigo;
    }

  onNoClick(): void {
    this.dialogRef.close();

  }

}
