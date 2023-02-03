import { createReducer, on } from "@ngrx/store";
import { getProducts, reset } from "./product.actions";
import { initialState } from "./product.state";

const _productReducer = createReducer(initialState,
    on(getProducts, (state) => {
        return {
            ...state,
            products: state.products
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            products: []
        }
    })

);

export function productReducer(state: any, action: any) {
    return _productReducer(state, action)
}  