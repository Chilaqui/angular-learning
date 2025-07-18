import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  // Propiedad para recibir el mensaje del componente padre
  @Input() recibeHijo: string = '';

}
