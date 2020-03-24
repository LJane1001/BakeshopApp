import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from '../shared/CartItem.model';
import { ProductItem } from '../shared/ProductItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsChanged = new EventEmitter<CartItem[]>();
  cartItemList: CartItem[] = [];
  totalPriceChanged = new EventEmitter<number>();
  totalPrice = 0;
  duplicateProductIndex = 0;

  constructor() {

  }

  getCartItemList() {
    return this.cartItemList.slice();
  }

  addProduct(product: ProductItem) {
    this.duplicateProductIndex = this.cartItemList.findIndex(item => item.productId === product.id);
    if (this.duplicateProductIndex === -1) {
      this.cartItemList.push(new CartItem(product.id, product.name, 1, product.price));
    } else {
      const item = this.cartItemList[this.duplicateProductIndex];
      this.cartItemList[this.duplicateProductIndex] = new CartItem(
                                                      item.productId,
                                                      item.productName,
                                                      ++item.quantity,
                                                      item.price + product.price);
    }

    this.totalPrice += product.price;
    this.cartItemsChanged.emit(this.cartItemList.slice());
    this.totalPriceChanged.emit(this.totalPrice);
  }

  clearAll() {
    this.cartItemList = [];
    this.cartItemsChanged.emit(this.cartItemList.slice());
    this.totalPrice = 0;
    this.totalPriceChanged.emit(this.totalPrice);
  }

  getTotalPrice() {
    return this.totalPrice;
  }

}
