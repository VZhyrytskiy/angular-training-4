import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() product!: CartItemModel;
  @Input() quantity!: number;

  @Output() increase = new EventEmitter<CartItemModel>();
  @Output() decrease = new EventEmitter<CartItemModel>();
  @Output() delete = new EventEmitter<CartItemModel>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onIncrease(product: CartItemModel): void {
    this.increase.emit(product);
  }

  onDecrease(product: CartItemModel): void {
    this.decrease.emit(product);
  }

  onDelete(product: CartItemModel): void {
    this.delete.emit(product);
  }
}
