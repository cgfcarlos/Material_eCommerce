import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private authService: AuthService, private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      console.log(this.appUser);
    });

    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout();
  }

}
