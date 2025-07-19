//Nombre del archivo: mi-directiva.ts
// Este archivo define una directiva personalizada en Angular
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
  standalone: false
})
export class MiDirectiva {

  // Esta directiva no tiene lógica específica por el momento
  // Podría ser utilizada para aplicar estilos o comportamientos a elementos HTML
  constructor() { }

}
