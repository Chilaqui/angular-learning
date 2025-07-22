import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  //Decalaracion de un formulario reactivo con FormGroup (Sirve para agrupar controles)
  formularioContanto: FormGroup;

  /* usuariosActivo: string = 'Pedro'; */
  // Variable para decalrar la suscripcion
  tipoDni: string = 'DNI';

  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    dni: '123456',
  }

  //Reactive form inicializacion usa FormBuilder
  constructor( private form: FormBuilder) {
    this.formularioContanto = this.form.group({// crea un FormGroup que contiene varios FormControl Cada control (como nombre y email) se define como un array:['valor inicial', validaciones].
      nombre: ['', [Validators.required, Validators.minLength(3)]],//Campo requerido y va dentro de un array porque es un FormControl y puede tener validaciones
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      dni: [''],
      email: ['', [Validators.required, Validators.email]]//Campo requerido y con validacion de email es una array porque es un FormControl y puede tener validaciones
    })
  }

  /**
 * Verifica si un campo específico del formulario tiene un tipo determinado de error
 * y si ya fue tocado por el usuario (para evitar mostrar errores desde el inicio).
 * 
 * @param controlName - El nombre del campo dentro del formulario (ej: 'email', 'nombre').
 * @param errorType - El tipo de error que se quiere verificar (ej: 'required', 'email').
 * @returns `true` si el campo tiene el error especificado y ya fue tocado, `false` en caso contrario.
 */

  hasErrors(controlName: string, errorType: string){
    return this.formularioContanto.get(controlName)?.hasError(errorType) && this.formularioContanto.get(controlName)?.touched
  }



  //From Reactive 
  enviar() {
    console.log(this.formularioContanto)
    alert(`Gracias ${this.formularioContanto.value.nombre}, hemos recibido tu mensaje.`);
  }

  
  /* ngOnInit(): void {
      this.formularioContanto.get('nombre')?.setValue(this.usuariosActivo);
      this.formularioContanto.get('nombre')?.disable();
  } */

  /* 
  ngOnInit(): void {
      //Agregando validadores aqui tambien si no los pusimos arriba
      this.formularioContanto.get('dni')?.setValidators([Validators.required, Validators.maxLength(3)])
      //Tambien podemos eliminar validadores
      this.formularioContanto.get('apellido')?.clearValidators()
      this.formularioContanto.get('apellido')?.updateValueAndValidity()


      this.formularioContanto.patchValue({
        nombre: this.usuarioActivo.nombre,
       // apellido: this.usuarioActivo.apellido, 
        dni: this.usuarioActivo.dni,
      })
      this.formularioContanto.get('nombre')?.disable();
      //this.formularioContanto.get('apellido')?.disable();
      this.formularioContanto.get('dni')?.disable();
     } */


      ngOnInit(): void {
          this.formularioContanto.get('tipoDni')?.valueChanges.subscribe(value =>{
            this.tipoDni = value;
          })
      }


}
