

export interface ProductState {
    // name: string;
    // price: number;

    products: Product[]
}

export interface Product {
    name: string;
    price: number;
}

const product: Product[] = [{ name: 'Parle-G', price: 10 }]

export const initialState: ProductState = { products: product }