import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { ProductService } from "../product.service";
import { getProducts } from "./product.actions";

@Injectable()

export class ProductEffects {
    constructor(private action$: Actions, private productService: ProductService) { }

    products$ = createEffect(() => {
        return this.action$.pipe(
            ofType(getProducts),
            exhaustMap((action) => {
                return this.productService.getProducts()
                    .pipe(map(data => ({ type: 'getProducts', payload: data })))
            }))
    })
}