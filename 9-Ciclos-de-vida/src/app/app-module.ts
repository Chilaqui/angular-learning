import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { ProductDetails } from './product-details/product-details';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dni } from './contact/dni/dni';

@NgModule({
  declarations: [
    App,
    Home,
    Products,
    Contact,
    ProductDetails,
    Dni
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
