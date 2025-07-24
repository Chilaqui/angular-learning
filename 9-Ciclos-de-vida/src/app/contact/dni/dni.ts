import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'dni-input',
  standalone: false,
  templateUrl: './dni.html',
  styleUrl: './dni.css'
})
export class Dni implements OnChanges {
  // Implementamos las interfaces OnInit y OnDestroy para poder usar sus métodos respectivos:
  // ngOnInit(): lógica después de crear el componente.
  // ngOnDestroy(): lógica antes de destruir el componente.

  FormularioDocumento: FormGroup; // Variable para manejar nuestro formulario reactivo.
  @Input() tipoDni: string = 'DNI'; // Variable usada para mostrar dinámicamente el tipo de documento.

  

  constructor(private form: FormBuilder) {
    // Inyectamos FormBuilder para construir fácilmente nuestro formulario con validaciones.

    this.FormularioDocumento = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes?.['tipoDni'].currentValue);
  }



  // Método de ayuda para mostrar errores solo cuando el campo ha sido tocado y contiene un error.
  hasErrors(controlName: string, errorType: string) {
    return this.FormularioDocumento.get(controlName)?.hasError(errorType) &&
           this.FormularioDocumento.get(controlName)?.touched;
  }

}
