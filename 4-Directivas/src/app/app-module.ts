import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MiDirectiva } from './mi-directiva';
import { FormsModule } from '@angular/forms';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';
import { Hermano } from './hermano/hermano';

@NgModule({
  declarations: [
    App,
    MiDirectiva,
    Padre,
    Hijo,
    Hermano
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
