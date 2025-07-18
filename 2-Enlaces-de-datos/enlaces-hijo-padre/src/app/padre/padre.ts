import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  reciboMensaje: string = '';

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

