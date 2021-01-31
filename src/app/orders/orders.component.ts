import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { ShopService } from '../shop.service';
import { ModalDialogService } from 'ngx-modal-dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ss: ShopService, private router: Router, private modalService: ModalDialogService,
    private viewRef: ViewContainerRef) { }

  orders: Order[] = [];

  ngOnInit(): void {
    this.commonMethod();
  }

  commonMethod() {
    this.ss.get_all_orders().subscribe(
      res => {
        this.orders = res;
      },
      err => {
        console.log('err', err);
      }
    )
  }

  showOrder(id) {
    this.router.navigate(["/order/" + id]);
  }

  deleteOrder(id) {
    this.modalService.openDialog(this.viewRef, {
      title: 'Delete order',
      data: {
        text: 'Are You sure You want to delete this?'
      },
      placeOnTop: true,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [

        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any, reject: any) => {
            resolve(
              this.ss.delete_order(id).subscribe(
                res => {
                  this.commonMethod();
                },
                err => {
                  console.log('err', err);
                }
              )
            );
          })
        },
        {
          text: 'no',
          buttonClass: 'btn btn-default',
          onAction: () => new Promise((resolve: any) => {

            resolve();

          })
        }

      ]
    });
  }

}
