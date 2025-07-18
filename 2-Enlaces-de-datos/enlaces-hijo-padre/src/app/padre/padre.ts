import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  // Variable para recibir el mensaje del hijo
  reciboMensaje: string = '';

  // Método que se ejecuta cuando el hijo emite un mensaje
  // Se vincula al evento del hijo en el template
  recibirMensaje($event: string) {
    this.reciboMensaje = $event;
  }

  protected valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

}

