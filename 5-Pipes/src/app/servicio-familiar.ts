import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliar {

  hermanoGrande?: string;
  hermanoPequeno?: string; 

  //getters y setters

  getHermanoGrande(): string {
    return this.hermanoGrande || 'Hermano no definido';
  }

  setHermanoGrande(nombre: string): void {
    this.hermanoGrande = nombre;
  }

  getHermanoPequeno(): string {
    return this.hermanoPequeno || 'Hermano no definida';
  }

  setHermanoPequeno(nombre: string): void {
    this.hermanoPequeno = nombre;
  }

  //Metodos

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo(): string {
    return 'Como esta tu hijo?';
  }

  constructor() { }
  
}
