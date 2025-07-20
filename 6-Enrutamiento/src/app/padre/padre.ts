import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliar } from '../servicio-familiar';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre implements OnInit {

  // Variable para almacenar el nombre del hermano grande
  nombre? = '';
  fecha?: Date = new Date();// Variable para almacenar la fecha actual
  cotiza?: number = 1000.5;// Ejemplo de uso de un pipe por defecto para mostrar el valor del dólar
  pi?: number = Math.PI;// Ejemplo de uso de un pipe por defecto para mostrar el valor de pi
  factor: number = 0.5;// Factor para calcular el valor en porcentaje

  // Inyectar el servicio familiar
  // Se utiliza un valor por defecto para evitar errores de inyección
  constructor(private _servicioFamiliar: ServicioFamiliar = new ServicioFamiliar()) { 

   }
   
   // Alternativa a la inyección del servicio usando inject
  private _servicioFamiliar2 = inject(ServicioFamiliar);
   
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');// Asignar un nombre al hermano grande
    this.nombre = this._servicioFamiliar.getHermanoGrande();// Asignar el nombre del hermano grande al componente
  }

  // Métodos para interactuar con el servicio familiar
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno()|| '');
  }

  // Método para preguntar por el hijo
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }



}
