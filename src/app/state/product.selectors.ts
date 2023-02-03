import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";


const getProductState = createFeatureSelector<ProductState>('products');

export const getProductList = createSelector(getProductState, (state) => {
    return state.products;
})