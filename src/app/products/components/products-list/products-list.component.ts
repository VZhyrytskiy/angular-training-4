import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: ProductModel[];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  handleAddToCart(product: ProductModel): void {
    console.log(`${product.name} was added to the cart`);
    this.cartService.addToCart(product);
  }
}
