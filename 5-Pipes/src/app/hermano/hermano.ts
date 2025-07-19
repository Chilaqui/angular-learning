import { Component, OnInit } from '@angular/core';
import { ServicioFamiliar } from '../servicio-familiar'; // Importar el servicio familiar

@Component({
  selector: 'app-hermano',
  standalone: false,
  templateUrl: './hermano.html',
  styleUrl: './hermano.css'
})
// Este componente representa a un hermano en la aplicación
// OnInit es un ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado
export class Hermano implements OnInit {

  // Variable para almacenar el nombre del hermano pequeño
  nombre? = '';


  // Inyectar el servicio familiar
  // Se utiliza un valor por defecto para evitar errores de inyección
  constructor(private _servicioFamiliar: ServicioFamiliar = new ServicioFamiliar()) { 
  
  }
  // ngOnInit es un ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Pedro');// Asignar un nombre a la hermana pequeño
    this.nombre = this._servicioFamiliar.getHermanoPequeno();// Asignar el nombre de la hermana pequeño al componente

  }

  // Métodos para interactuar con el servicio familiar
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande()|| '');
  }

  // Método para preguntar por el hijo
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }



}
