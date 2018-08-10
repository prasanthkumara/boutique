import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductsDetailComponent {

  private product_id = "";
  private productDetail = {};
  private mainImage = "";
  private quantity = 1;

  constructor(private product_service:ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.product_id = params.id;
      this.getProductInfo(this.product_id);
    });
  }

  getProductInfo(id){
    this.product_service.getProduct(id).subscribe(data=>{
      this.productDetail = data;
    });
  }

  selectImage = function(image){
    this.mainImage = image;
  }

  addQuantity = function(){
    this.quantity++;
  }

  removeQuantity = function(){
    if(this.quantity>1)
    {
      this.quantity--;
    }
  }


  addToCart(){
    this.product_service.addToCart(this.productDetail,this.quantity);
  }

}
