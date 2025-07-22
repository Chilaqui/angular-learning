import { Component } from '@angular/core';
import { productsList } from "../products/products.mock";

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  // productsList es una lista de productos que se importan desde un archivo mock
  productsList = productsList;


}
