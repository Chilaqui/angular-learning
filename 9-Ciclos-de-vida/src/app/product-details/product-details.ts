import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, productsList } from '../products/products.mock';
import { timeEnd } from 'console';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit{

  // Inyecta ActivatedRoute para acceder a los parámetros de la ruta
  constructor( private _route: ActivatedRoute) { }


 
  product?: Products;
  productList: Products[] = productsList;
  loading: boolean = true;
  color: string = 'blue';

  /* ngOnInit(): void {
      setTimeout(() => {
        this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loading = false;
      });
      }, 1500); // Simula un retraso de 2 segundos para cargar los datos
     
  } */

    ngOnInit(): void {
        this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number > 5 ? 'red' : 'blue'; // Cambia el color según el precio
        this.loading = false;
        
      });
    }
     




}
