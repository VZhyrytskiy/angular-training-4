import { Component, OnInit } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartProductsList!: CartItemModel[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProductsList();
  }

  getCartProductsList(): void {
    this.cartProductsList = this.cartService.getCartProducts();
  }

  identify(index: number, item: { name: string }): string {
    return item.name;
  }
}
