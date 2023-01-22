import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, switchMap, finalize, exhaustMap, concatMap } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  isLoading = false;
  constructor(private readonly service: ProductService, private readonly route: ActivatedRoute) { }
  productDetails!: Product;
  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => this.service.getProductById(param.get('id')))
    ).subscribe((data: Product) => {
      if(data){
        this.productDetails = data
        console.log(this.productDetails)
        this.isLoading = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
