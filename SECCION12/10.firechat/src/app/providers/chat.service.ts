import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message} from '../interface/message.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  chats:Message[] = [];

  constructor(private afs: AngularFirestore) {

  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Message>('chats');
    return this.itemsCollection.valueChanges().map((mensajes:Message[]) => {
                                                      console.log(mensajes);
                                                      this.chats = mensajes;
                                                  });
  }

  agregarMensaje(texto:string){
    //TODO : FALTA EL UID DEL USUARIO
    let mensaje:Message = {
      mensaje : texto,
      nombre: "Test",
      fecha : new Date().getTime()
    }
    return this.itemsCollection.add(mensaje);
  }

}
