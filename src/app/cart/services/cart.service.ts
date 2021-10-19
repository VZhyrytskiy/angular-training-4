import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';
import { CartListModel } from '../models/cart-list.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: CartListModel = {
    products: [],
    // можно, например так:
    // totals: [quantity: number; sum: number] = [0, 0];
    totalPrice: 0,
    totalQuantity: 0,
  };
  totalQuantity!: number;
  totalPrice!: number;

  getCartProducts(): CartListModel {
    return this.cartProducts;
  }

  addToCart(product: ProductModel): void {
    let elInCartList = this.cartProducts.products.find(
      (item) => item.name === product.name
    );

    elInCartList
      ? elInCartList.quantity++
      : this.cartProducts.products.push({
          ...product,
          quantity: 1,
        });

    this.getTotalValues();
  }

  increase(product: CartItemModel) {
    product.quantity ++;
    this.getTotalValues();
  }

  decrease(product: CartItemModel) {
    product.quantity === 1 ? product.quantity = 1 : product.quantity --;
    this.getTotalValues();
  }

  delete(product: CartItemModel) {
    this.cartProducts.products = this.cartProducts.products.filter(
      el => el.name != product.name
    );
    this.getTotalValues();
  }

  getTotalPrice(): number {
    this.totalPrice = this.cartProducts.products.reduce((sum, current) => {
      return current.price * current.quantity + sum;
    }, 0);
    this.cartProducts.totalPrice = this.totalPrice;
    return this.totalPrice;
  }

  getTotalQuantity(): number {
    this.totalQuantity = this.cartProducts.products.reduce((sum, current) => {
      return current.quantity + sum;
    }, 0);
    this.cartProducts.totalQuantity = this.totalQuantity;
    return this.totalQuantity;
  }

  getTotalValues(): void {
    this.getTotalPrice();
    this.getTotalQuantity();
  }
}
