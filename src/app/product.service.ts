import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';
  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  //Error handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured :', error.error.message)
    } else {
      console.error(
        `Backend returned code ${error.status},` +
        `Body was : ${error.error}`
      )
    }
     return throwError('Something bad happened; please try again later.')
  }
}

