import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products;
  constructor(private product:ProductsService) {
    this.getProducts();
   }
ngOnInit(){

}
  getProducts() {
    var obj = this;
    this.product.listProducts()
    .subscribe(data => {
      obj.products = data;
    });
  }

  addToCart = function (product){
    this.product.addToCart(product,1);
  }

}
