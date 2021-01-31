import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-order-show',
  templateUrl: './order-show.component.html',
  styleUrls: ['./order-show.component.css']
})
export class OrderShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ss: ShopService, private router: Router) { }

  order: Order;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if (params.id) {
          this.ss.get_order_by_id(params.id).subscribe(
            res => {
              this.order = res;
            },
            err => {
              console.log('err', err);
            }
          )
        }
      }
    )
  }

}
