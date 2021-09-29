import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProductsList: CartItemModel[] = [];

  constructor() {}

  getCartProducts(): CartItemModel[] {
    return this.cartProductsList;
  }

  addToCart(product: ProductModel): void {
    let elInCartList = this.cartProductsList.find(
      (item) => item.name === product.name
    );
    elInCartList
      ? elInCartList.quantity++
      : this.cartProductsList.push({ ...product, quantity: 1 });
  }
}
