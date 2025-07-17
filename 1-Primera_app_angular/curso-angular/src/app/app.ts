import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HijoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Hola-mundo-en-angular';
  protected subtitle = 'Es lo primero que escribimos en Angular';
}
