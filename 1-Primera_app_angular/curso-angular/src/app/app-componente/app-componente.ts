import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-componente',
  imports: [],
  templateUrl: './app-componente.html',
  styleUrl: './app-componente.css'
})
// AppComponente class definition
export class AppComponente implements OnInit {

  //Propiedades del componente
  title: string = 'Mi primera componente Angular';

  // Constructor del componente
  constructor() { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    
  }

}
