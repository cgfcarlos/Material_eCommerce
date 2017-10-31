import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-porduct-quantity',
  templateUrl: './porduct-quantity.component.html',
  styleUrls: ['./porduct-quantity.component.css']
})
export class PorductQuantityComponent implements OnInit {

  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
