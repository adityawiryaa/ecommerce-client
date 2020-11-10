import { Product } from './product';

export class Cart {
    product: Product;
    quantity : 1;
}
export class ListCart {
    _id : string;
    user : string; 
    product : any;
    quantity : number;
    price : number;
}
export class Checkout {
    user : string;
    _id : string;
    total : number;
}
export interface OrderHistory {
    history : string;
    _id : string;
    user : any;
    total: number;
}