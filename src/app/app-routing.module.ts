import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderShowComponent } from './order-show/order-show.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductShowComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'order/:id',
    component: OrderShowComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
