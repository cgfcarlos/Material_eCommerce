import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any>;
  categories;
  id;
  product = {};

  constructor(private categoryService: CategoryService,
     private productService: ProductService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
    this.categories$.subscribe(c => {
      this.categories = c;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('¿Desea borrar este producto')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

}
