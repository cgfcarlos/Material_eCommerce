import { ProductService } from '../services/product.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-admin-products',
  styleUrls: ['admin-products.component.css'],
  templateUrl: 'admin-products.component.html',
})
export class AdminProductsComponent implements OnInit {
  prodcuts = [];

  sortedData;

  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    await this.productService.getAll().subscribe(products => this.sortedData = this.prodcuts = products);
    this.sortedData = this.prodcuts.slice();
  }

  sortData(sort: Sort) {
    const data = this.prodcuts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = (this.sortedData) ? data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    }) : data;
  }

  filter(query: string) {
    this.sortedData = (query && this.sortedData) ?
      this.sortedData.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.prodcuts;
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
