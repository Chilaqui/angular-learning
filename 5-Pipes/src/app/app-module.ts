import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';
import { Hermano } from './hermano/hermano';
import { EstiloHermanosDirective } from './estilo-hermanos-directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado-pipe';

@NgModule({
  declarations: [
    App,
    Padre,
    Hijo,
    Hermano,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
