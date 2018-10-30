import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item.model';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES  = 'img';

  constructor(public db: AngularFirestore) { }

  //Guarda en la base de datos de firebase
  private guardarImagen(imagen : {nombre:string,url:string}){
    this.db.collection(`${this.CARPETA_IMAGENES}`).add(imagen);
  }

  cargarImagenesFirebase(imagenes : FileItem[]){
    // console.log(imagenes);
     const storageRef = firebase.storage().ref();
    
     for (const item of imagenes) {
       item.cargando = true;
       if(item.progreso >= 100){
         continue;
       }

       //sube las imagenes al storage
       const uploadTask : firebase.storage.UploadTask =  storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);
       uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            (error) => console.error('Error al subir',error),
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                item.url = downloadURL;
                item.cargando = false;
                this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
              });
            }
        );
     }
  }
}
