import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


  public usuario: any = {
    name: '',
    email: ''
  }

  enviar(){
    console.log(this.usuario);
    alert(`Gracias ${this.usuario.name}, hemos recibido tu mensaje.`);
  }

}
