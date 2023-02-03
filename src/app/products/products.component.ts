import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { getProducts } from '../state/product.actions';
import { getProductList } from '../state/product.selectors';
import { ProductState } from '../state/product.state';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  rowProducts: Product[] = [];
  filteredProducts: any = {};
  products: any[] = [];
  selectedItem = '';
  isloading = false;
  productSubscription!: Subscription;
  isOpen = false;
  constructor(private readonly service: ProductService, private readonly store: Store<ProductState>) { }

  ngOnInit(): void {

    this.store.dispatch(getProducts());
    this.productSubscription = this.store.select(getProductList).subscribe((data) => {
      console.log('store data - ', data)
    })
    this.isloading = true;
    this.service.getProducts().pipe(
      finalize(() => {
        this.isloading = false;
      })
    ).subscribe(
      (data: Product[]) => {
        this.rowProducts = data;
        this.setFilteredProduct();
      },
      err => console.log(err));
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  setFilteredProduct(): void {
    if (this.rowProducts && this.rowProducts.length) {
      this.filteredProducts = this.rowProducts.reduce((acc: any, cur) => {
        if (!acc[cur.category]) {
          acc[cur.category] = [];
        }
        acc[cur.category].push(cur);
        return acc;
      }, {})
      this.setProducts();
    }
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

  onMoreClick(content: HTMLElement): void {
    content.className = content.className === 'close' ? 'open' : 'close';
  }

  getEmmitedProductName(productName: string): void {
    console.log(productName)
    this.selectedItem = productName;
  }
}


