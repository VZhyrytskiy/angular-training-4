import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartProductsList?: ProductModel[];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    let rand = [true, false][Math.floor(Math.random()*2)];
    rand ? this.cartProductsList = this.cartService.getCartProducts() : null;
  }

  identify(index: number, item: { name: string }) {
    return item.name; 
  }
}
