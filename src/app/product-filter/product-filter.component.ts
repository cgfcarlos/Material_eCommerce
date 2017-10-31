import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  filteredProducts: Product[] = [];
  @Input('category') category;
  categories$;
  products: Product[] = [];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : this.products;
    });
  }

}
