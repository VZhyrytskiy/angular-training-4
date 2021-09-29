import { Injectable } from '@angular/core';
import { Category } from 'src/app/products/models/category.enum';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductsList: ProductModel[] = [];

  constructor() {}

  getCartProducts(): ProductModel[] {
    return this.cartProductsList;
  }

  addToCart(product: ProductModel): void {
    this.cartProductsList.push(product);
  }
}
