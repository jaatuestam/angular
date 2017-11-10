import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent  {

  mensaje:string = "";
  constructor(private chatService:ChatService) {
    this.chatService.cargarMensajes().subscribe((data:any[])=>{
      console.log(data);
    })
  }

  enviarMensaje(){
    console.log(this.mensaje);
  }

}
