import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderShowComponent } from './order-show/order-show.component';
import { FormsModule } from '@angular/forms';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MyModalComponent } from './mymodal/mymodal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductShowComponent,
    OrdersComponent,
    OrderShowComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
