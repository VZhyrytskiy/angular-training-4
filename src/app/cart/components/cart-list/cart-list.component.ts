import { Component, OnInit } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';
import { CartListModel } from '../../models/cart-list.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartProducts!: CartListModel;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }

  identify(index: number, item: { name: string }): string {
    return item.name;
  }

  handleIncrease(product: CartItemModel) {
    this.cartService.increase(product);
  }

  handleDecrease(product: CartItemModel) {
    this.cartService.decrease(product);
  }

  handleDelete(product: CartItemModel) {
    this.cartService.delete(product);
  }
}
