import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductItem } from '../shared/ProductItem.model';
import { CartItem } from '../shared/CartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
   this.cartItems = this.cartService.getCartItemList();
   this.cartService.cartItemsChanged
      .subscribe(
        (cartItems: CartItem[]) => {
          this.cartItems = cartItems;
        }
      );
   this.totalPrice = this.cartService.getTotalPrice();
   this.cartService.totalPriceChanged
      .subscribe(
        (totalPrice: number) => {
          this.totalPrice = totalPrice;
        }
      );
  }

  onClearAll() {
    this.cartService.clearAll();
  }

  onIncrementQuantity(currentQuantity: number, productId: number){

  }

}
