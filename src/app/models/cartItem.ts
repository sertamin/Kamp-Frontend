import { Product } from "./product";

export class CartItem{
    push(cartItem: CartItem) {
      throw new Error('Method not implemented.');
    }
    indexOf(item: void): any {
      throw new Error('Method not implemented.');
    }
    splice(arg0: any, arg1: number) {
      throw new Error('Method not implemented.');
    }
    find(arg0: (c: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    product:Product;
    quantity:number;
}