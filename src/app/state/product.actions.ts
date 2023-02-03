import { createAction, props } from "@ngrx/store";

export const getProducts = createAction('getProducts', props<{ payload: any }>);
export const reset = createAction('reset');