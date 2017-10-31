import { ShoppingCartService } from './../services/shopping-cart.service';
import { ProductService } from './../services/product.service';
import { CategoryService } from '../services/category.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  cart$;
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  // tslint:disable-next-line:max-line-length
  constructor(private cartService: ShoppingCartService, private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) { }

  async ngOnInit() {
    this.cart$ = (await this.cartService.getCart());
    this.populateProducts();
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) : this.products;
  }

  private populateProducts() {
    this.productService.getAll()
    .switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
    });
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 769) {
            this.sidenav.close();
            this.navMode = 'over';
        }
        if (event.target.innerWidth > 769) {
           this.sidenav.open();
           this.navMode = 'side';
        }
    }
}
