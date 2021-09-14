import { Injectable } from '@angular/core';
import { Category } from 'src/app/products/models/category.enum';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductsList: ProductModel[] = [
    {
      name: 'Apple iPhone 12 Pro Max',
      description: 'Lorem ipsum dolor sit amet',
      price: 50_000,
      category: Category.iPhone,
      isAvailable: true,
      colors: ['Graphite', 'Pacific Blue', 'Silver', 'Gold'],
      memory: [128, 256, 512]
    },
    {
      name: 'Apple iPad Pro 4 12.9',
      description: '2020 Wi-Fi 256GB Silver (MXAU2)',
      price: 50_000,
      category: Category.iPad,
      isAvailable: true,
      colors: ['Graphite', 'Pacific Blue', 'Silver', 'Gold'],
      memory: [128, 256, 512]
    }
  ];

  constructor() { }

  getCartProducts() {
    return this.cartProductsList;
  }
}
