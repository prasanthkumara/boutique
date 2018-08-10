import {ProductsDetailComponent} from './product_detail/productDetail.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
export const routes = [
    {path:'',component:ProductsComponent},
    {path:'product/:id',component:ProductsDetailComponent},
    {path:'cart',component:CartComponent}
]