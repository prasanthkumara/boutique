import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=[];
  total = 0;
  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('cart_items'));
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = 0;
    this.items.map((item)=>{
      this.total+=item.price;
    });
  }

  removeFromCart(index){
    this.items.splice(index,1);
    localStorage.setItem('cart_items',JSON.stringify(this.items));
    this.calculateTotal();
  }
}
