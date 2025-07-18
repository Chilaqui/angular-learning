import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  // Evento para emitir un mensaje al padre
  // Se usa @Output para permitir que el padre escuche este evento
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  // Variable para almacenar el mensaje que se enviará al padre
  mensaje: string = '';

  // Método para enviar el mensaje al padre
  // Se vincula al evento del botón en el template
  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

}
