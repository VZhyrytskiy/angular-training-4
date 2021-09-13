import { Injectable } from '@angular/core';
import { Category } from '../models/category.enum';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: ProductModel[] = [
    {
      name: 'Apple iPhone 12 Pro Max',
      description: 'Lorem ipsum dolor sit amet',
      price: 50_000,
      category: Category.ESim,
      isAvailable: true,
      colors: ['Graphite', 'Pacific Blue', 'Silver', 'Gold'],
      memory: [128, 256, 512]
    },
    {
      name: 'Apple iPhone 12',
      description: 'Lorem ipsum dolor sit amet',
      price: 38_000,
      category: Category.NanoSim,
      isAvailable: true,
      colors: ['Graphite', 'Pacific Blue', 'Silver', 'Gold', 'Rose Gold'],
      memory: [128, 256, 512]
    },
    {
      name: 'Apple iPhone 8 Plus',
      description: 'Lorem ipsum dolor sit amet',
      price: 38_000,
      category: Category.NanoSim,
      isAvailable: false,
      colors: ['Yellow', 'Red', 'Silver', 'Gold', 'Rose Gold'],
      memory: [128, 256, 512]
    }
  ];

  constructor() { }

  getProducts() {
    console.log('Get products');
    return this.productsList;
  }
}
