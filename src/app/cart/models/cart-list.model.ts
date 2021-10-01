import { CartItemModel } from "./cart-item.model";

export class CartListModel {
  products: CartItemModel[] = [];
  totalQuantity?: number;
  totalPrice?: number;
}
