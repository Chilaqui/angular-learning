import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanosDirective]',
  standalone: false
})
export class EstiloHermanosDirective {

  //Este directive aplica un estilo a los elementos hermanos del elemento al que se aplica
  constructor( private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'green';// Cambia el color de fondo a verde
    this.element.nativeElement.style.color = 'blue';// Cambia el color del texto a azul
    this.element.nativeElement.style.fontSize = '30px';// Cambia el tamaño de la fuente a 30px
  }



}
