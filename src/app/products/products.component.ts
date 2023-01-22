import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  rowProducts: Product[] = [];
  filteredProducts: any;
  products: any[] = [];
  selectedItem = '';
  isloading = false;
  currentRate = 3.14;

  constructor(private readonly service: ProductService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.service.getProducts().pipe(
      finalize(() => {
        this.isloading = false;
      })
    ).subscribe((data: Product[]) => {
      this.rowProducts = data;
      this.setFilteredProduct();
    });
  }

  setFilteredProduct(): void {
    this.filteredProducts = this.rowProducts.reduce((acc: any, cur) => {
      if (!acc[cur.category]) {
        acc[cur.category] = [];
      }
      acc[cur.category].push(cur);
      return acc;
    }, {})
    this.setProducts();
  }

  setProducts(): void {
    for (let key in this.filteredProducts) {
      if (this.filteredProducts.hasOwnProperty(key)) {
        let obj = {
          key: key,
          value: this.filteredProducts[key]
        }

        this.products.push(obj)
      }
    }
  }
}


