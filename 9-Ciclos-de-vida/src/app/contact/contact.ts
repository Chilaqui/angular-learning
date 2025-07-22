import { Component, OnDestroy, OnInit } from '@angular/core'; 
// Importamos OnInit desde Angular para poder usar el ciclo de vida.
// OnInit es una interfaz que nos permite ejecutar código automáticamente
// justo después de que el componente ha sido inicializado por Angular.

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
// Importamos clases necesarias para construir formularios reactivos.

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit, OnDestroy {
  // Al implementar la interfaz OnInit, estamos obligados a definir el método ngOnInit().

  formularioContanto: FormGroup; // Variable para manejar nuestro formulario reactivo

  tipoDni: string = 'DNI'; // Variable usada para mostrar dinámicamente el tipo de documento

  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    dni: '123456',
  };

  constructor(private form: FormBuilder) {
    // En el constructor inyectamos el servicio FormBuilder que nos ayuda a construir el formulario.

    // Aquí se inicializa el formulario con sus campos y validaciones.
    this.formularioContanto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      dni: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Este método viene de la interfaz OnInit.
  // Angular lo ejecuta automáticamente justo después de que el componente se ha creado y renderizado.
  ngOnInit(): void {
    // Nos suscribimos a los cambios del campo 'tipoDni'.
    // Cada vez que el usuario cambia la opción del select en el formulario,
    // este bloque de código se ejecuta y actualiza la variable 'tipoDni'.
    this.formularioContanto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
    });
  }

  // Método de utilidad para mostrar errores en los campos solo si han sido tocados y tienen errores.
  hasErrors(controlName: string, errorType: string) {
    return this.formularioContanto.get(controlName)?.hasError(errorType) &&
           this.formularioContanto.get(controlName)?.touched;
  }

  // Método que se ejecuta al enviar el formulario.
  enviar() {
    console.log(this.formularioContanto);
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }

  ngOnDestroy(): void {
      console.log("Se destrullo este componente")
  }



}
