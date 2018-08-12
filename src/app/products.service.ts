import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get('/api/product/list');
  }

  getProduct(id) {
    return this.http.get('/api/product/detail/'+ id);
  }

  getCartItems(){
    if(localStorage.getItem('cart_items')) {
      return JSON.parse(localStorage.getItem('cart_items'));
    }
    else {
      return [];
    }
  }

  addToCart = function(productDetail,quantity){
    var items = [];
    if(localStorage.getItem('cart_items')) {
      items = JSON.parse(localStorage.getItem('cart_items'))
    }
    var index = -1;
    items.map((item,i)=>{
      if(productDetail._id==item.id) {
        index=i;
      }
    })

    if(index!=-1) {
      items.splice(index,1);
    }
    items.push(
      {
        name: productDetail.name,
        price: quantity*productDetail.price,
        quantity: quantity,
        id: productDetail._id,
        image: productDetail.image_path
      }
    );
    localStorage.setItem('cart_items',JSON.stringify(items));
    console.log("hi")
  }
}