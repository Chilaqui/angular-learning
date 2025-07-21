import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Contact } from './contact/contact';

//Define las rutas de la aplicación
const routes: Routes = [
{path: 'home', component: Home},// Ruta para la página de inicio
{path: 'products', component: Products},// Ruta para la página de productos
{path: 'products/:productId/:price', component: ProductDetails},// Ruta para los detalles de un producto específico
{path: 'contact', component: Contact}, // Ruta para la página de contacto
{path: '**', redirectTo: '/home', pathMatch: 'full'} // Redirige cualquier ruta desconocida a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
