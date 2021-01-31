import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ss: ShopService, private router: Router) { }

  product: Product;
  quantity = 0;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if (params.id) {
          this.ss.get_product_by_id(params.id).subscribe(
            res => {
              this.product = res;
            },
            err => {
              console.log('err', err);
            }
          )
        }
      }
    )
  }

  checkout() {
    const order = {}
    order['product_id'] = this.product.id;
    order['product_path'] = this.product.path;
    order['product_name'] = this.product.product_name;
    order['product_price'] = this.product.price;
    order['quantity'] = this.quantity;
    this.ss.create_order(order).subscribe(
      res => {
        this.router.navigate(["/orders"]);
      },
      err => {
        console.log('err', err);
      }
    )
  }

}
