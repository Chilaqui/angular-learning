import { Component, OnDestroy, OnInit } from '@angular/core'; 
// Importamos OnInit y OnDestroy desde Angular.
// OnInit se usa para ejecutar lógica al inicializar el componente.
// OnDestroy se usa para limpiar recursos justo antes de que el componente sea destruido.

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
// Importamos clases necesarias para construir formularios reactivos.

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit, OnDestroy {
  // Implementamos las interfaces OnInit y OnDestroy para poder usar sus métodos respectivos:
  // ngOnInit(): lógica después de crear el componente.
  // ngOnDestroy(): lógica antes de destruir el componente.

  formularioContanto: FormGroup; // Variable para manejar nuestro formulario reactivo.
  tipoDni: string = 'DNI'; // Variable usada para mostrar dinámicamente el tipo de documento.
  mostrarDni: boolean = false;

  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    dni: '123456',
  };

  constructor(private form: FormBuilder) {
    // Inyectamos FormBuilder para construir fácilmente nuestro formulario con validaciones.

    this.formularioContanto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta automáticamente después de crear el componente.

    // Nos suscribimos a los cambios en el campo 'tipoDni' del formulario.
    // Cada vez que el usuario cambia el valor del select, actualizamos la variable tipoDni.
    this.formularioContanto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
      this.mostrarDni = value != '';
    });
  }

  // Método que se ejecuta justo antes de que el componente sea destruido por Angular.
  // Se usa típicamente para liberar recursos, cancelar suscripciones o limpiar intervalos.
  ngOnDestroy(): void {
    console.log("Se destruyó este componente");
    // Aquí podrías cancelar la suscripción a valueChanges si la hubieras guardado como variable.
  }

  // Método de ayuda para mostrar errores solo cuando el campo ha sido tocado y contiene un error.
  hasErrors(controlName: string, errorType: string) {
    return this.formularioContanto.get(controlName)?.hasError(errorType) &&
           this.formularioContanto.get(controlName)?.touched;
  }

  // Método que se ejecuta al enviar el formulario.
  enviar() {
    console.log(this.formularioContanto);
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }
}
