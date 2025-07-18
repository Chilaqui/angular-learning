import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  mensaje: string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

}
