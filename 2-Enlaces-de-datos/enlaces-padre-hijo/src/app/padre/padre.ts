import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  valorContador: number = 0;

  incrementarContador(){
    this.valorContador++;
  }

  decrementarContador(){
    this.valorContador--; 
 }

 // Mensaje que se enviará al componente hijo
 mensajePadre: string = 'Mensaje desde el componente Padre';


}
