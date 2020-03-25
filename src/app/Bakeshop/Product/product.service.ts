import { ProductItem } from './../shared/ProductItem.model';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Product.model';
import { ProductCategory } from '../shared/ProductCategory.enum';
import { CartService } from '../Cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsChanged = new Observable<Product[]>();

  strawberryCake: ProductItem = new ProductItem(
    1,
    'Strawberry Cake',
    500.00,
    'assets/Images/strawberryCake.png',
    ProductCategory.Cake
  );
  chocolateCake: ProductItem = new ProductItem(
    2,
    'Chocolate Cake',
    450.00,
    'assets/Images/chocolateCake.png',
    ProductCategory.Cake
  );
  strawberryDonut: ProductItem = new ProductItem(
    3,
    'Strawberry Donut',
    50.00,
    'assets/Images/strawberryDonut.png',
    ProductCategory.Donut
  );
  chocolateDonut: ProductItem = new ProductItem(
    4,
    'Chocolate Donut',
    50.00,
    'assets/Images/chocolateDonut.png',
    ProductCategory.Donut
  );
  strawberryCupcake: ProductItem = new ProductItem(
    5,
    'Strawberry Cupcake',
    45.00,
    'assets/Images/strawberryCupcake.png',
    ProductCategory.Cupcake
  );
  chocolateCupcake: ProductItem = new ProductItem(
    6,
    'Chocolate Cupcake',
    40.00,
    'assets/Images/chocolateCupcake.png',
    ProductCategory.Cupcake
  );
  strawberryCrepe: ProductItem = new ProductItem(
    7,
    'Strawberry Crepe',
    120.00,
    'assets/Images/strawberryCrepe.png',
    ProductCategory.Crepe
  );
  chocolateCrepe: ProductItem = new ProductItem(
    8,
    'Chocolate Crepe',
    100.00,
    'assets/Images/chocolateCrepe.png',
    ProductCategory.Crepe
  );

  productList: Product[] = [];

  baseUrl = environment.baseUrl;

  constructor(private cartService: CartService, private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/getproducts');;
  }

  setProducts(productList: Product[]) {
    this.productList = productList;
  }

  addProductToCart(product: ProductItem) {
    this.cartService.addProduct(product);
  }

}
