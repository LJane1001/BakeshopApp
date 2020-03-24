import { Product } from './../shared/Product.model';
import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../shared/ProductItem.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
     this.productList = this.productService.getProductList();
  }
4
  onAddToCart(product: ProductItem) {
    this.productService.addProductToCart(product);
  }
}
