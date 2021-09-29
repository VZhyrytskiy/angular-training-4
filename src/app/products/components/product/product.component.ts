import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
