import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{

  constructor( private _route: ActivatedRoute) { }

  producto: string = '';
  color: string = '';
  col: string = '';
  price: number = 0;

  ngOnInit(): void {
      this._route.params.subscribe(params =>{
        this.producto = params['productId'];
        this.color = params['category'];
        this.col = params['category2'];
        this.price = params['price'];
      })
  }

}
