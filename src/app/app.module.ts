import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from './filter-product.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ProductSpinnerComponent } from './product-spinner/product-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    FilterProductPipe,
    ViewProductComponent,
    ProductRatingComponent,
    ProductSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
