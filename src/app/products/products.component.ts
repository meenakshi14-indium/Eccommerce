import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ss: ShopService, private router: Router) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.ss.get_all_products().subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log('err', err);
      } 
    )
  }

  productShow(id) {
    this.router.navigate(["/product/" + id]);
  }

}
