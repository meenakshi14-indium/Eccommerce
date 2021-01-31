import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from './product';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  private dburl = "http://localhost:3000/products";
  private order_dburl = "http://localhost:3000/orders";

  public get_all_products():Observable<Product[]> {
    return this.http.get<Product[]>(this.dburl);
  }

  public get_product_by_id(id: number): Observable<Product> {
    return this.http.get<Product>(this.dburl + "/" + id);
  }

  public create_order(order: any): Observable<Order> {
    return this.http.post<Order>(this.order_dburl, order);
  }

  public get_all_orders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.order_dburl);
  }

  public get_order_by_id(id: number): Observable<Order> {
    return this.http.get<Order>(this.order_dburl + "/" + id);
  }

  public delete_order(id: number): Observable<Order> {
    return this.http.delete<Order>(this.order_dburl + "/" + id);
  }
}
