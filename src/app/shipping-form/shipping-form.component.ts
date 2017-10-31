import { OrderService } from '../services/order.service';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AuthService } from './../services/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Order } from '../models/order';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  shipping = {};
  userSubscription: Subscription;
  userId: string;
  @Input('cart') cart: ShoppingCart;


  constructor(private authService: AuthService,
  private orderService: OrderService,
  private router: Router,
  private cartService: ShoppingCartService,
  public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);

    const x = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        };
      })
    };

    const result = await this.orderService.placeOrder(x);
    this.cartService.clearCart();
    this.snackBar.open('Pedido realizado', 'Aceptar', {
      duration: 2000,
    });
    this.router.navigate(['/order-success', result.key]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
