import { createContext } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Cart {
    products?: Array<Product>,
    shipping_value?: number;
}

const CartContext = createContext<Cart>({
    products: [],
});

export default CartContext;