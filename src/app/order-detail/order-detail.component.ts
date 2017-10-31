import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  order: any;
  orderId: string;
  date: Date;
  subscription: Subscription;
  subscriptionOrder: Subscription;
  isCollapsed = true;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(param => {
      this.orderId = param.get('id');
    });
    this.subscriptionOrder = this.orderService.getOrder(this.orderId).subscribe(order => {
      this.order = order;
      this.date = new Date(order.datePlaced);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionOrder.unsubscribe();
  }

}
