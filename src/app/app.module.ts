import { OrderService } from './services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2/angularfire2';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PorductQuantityComponent } from './porduct-quantity/porduct-quantity.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccesComponent } from './order-succes/order-succes.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProductsComponent,
    HomeComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    ProductFormComponent,
    ProductCardComponent,
    PorductQuantityComponent,
    CheckOutComponent,
    OrderSuccesComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    CdkTableModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: ProductsComponent },

      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'order-success/:id', component: OrderSuccesComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders/:id', component: OrderDetailComponent, canActivate: [AuthGuardService] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },

      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'my/orders', component: MyOrdersComponent },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders/:id', component: OrderDetailComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },

      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    AdminAuthGuardService,
    ProductService,
    CategoryService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
