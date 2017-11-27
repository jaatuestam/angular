import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message} from '../interface/message.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  chats:Message[] = [];
  public usuario:any = {};

  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log('Data del usuario' , user);
      if(!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(proveedor : string) {
    if(proveedor === 'google'){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Message>('chats',ref=> ref.orderBy('fecha','desc')
                                                                          .limit(5));
    return this.itemsCollection.valueChanges().map((mensajes:Message[]) => {
                                                      console.log(mensajes);
                                                      this.chats = [];
                                                      for(let mensaje of mensajes){
                                                        this.chats.unshift(mensaje);
                                                      }
                                                      return this.chats;
                                                      // this.chats = mensajes;
                                                  });
  }

  agregarMensaje(texto:string){
    //TODO : FALTA EL UID DEL USUARIO
    let mensaje:Message = {
      mensaje : texto,
      nombre: this.usuario.nombre,
      uid : this.usuario.uid,
      fecha : new Date().getTime()
    }
    return this.itemsCollection.add(mensaje);
  }

}
