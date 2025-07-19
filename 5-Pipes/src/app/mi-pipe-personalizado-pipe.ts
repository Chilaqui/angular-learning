import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado',
  standalone: false
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  //transform es el método que se ejecuta cuando se usa el pipe
  //Recibe el valor que se le pasa al pipe y retorna el valor transformado
  //En este caso, convierte el valor a mayúsculas
  //Si el valor es undefined, retorna una cadena vacía
  transform(valor: string | undefined): unknown {
    return valor?.toUpperCase() || '';// Convertir a mayúsculas o retornar cadena vacía si es undefined
  }

}
