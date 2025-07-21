import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  //Decalaracion de un formulario reactivo con FormGroup (Sirve para agrupar controles)
  formularioContanto: FormGroup;

  //Reactive form inicializacion usa FormBuilder
  constructor( private form: FormBuilder) {
    this.formularioContanto = this.form.group({// crea un FormGroup que contiene varios FormControl Cada control (como nombre y email) se define como un array:['valor inicial', validaciones].
      nombre: ['', Validators.required],//Campo requerido y va dentro de un array porque es un FormControl y puede tener validaciones
      email: ['', [Validators.required, Validators.email]]//Campo requerido y con validacion de email es una array porque es un FormControl y puede tener validaciones
    })
  }

  //From Reactive 
  enviar() {
    console.log(this.formularioContanto)
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }


}
