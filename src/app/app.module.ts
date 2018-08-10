import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';

import { ProductsDetailComponent } from './product_detail/productDetail.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductsService} from './products.service';

import {routes} from './app.routing';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProductsComponent,
    CartComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
