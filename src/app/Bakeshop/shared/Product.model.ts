import { ProductItem } from './ProductItem.model';

export class Product {
    public categoryId: number;
    public categoryName: string;
    public details: ProductItem[];

    constructor(categoryId: number, categoryName: string, details: ProductItem[]){
      this.categoryId = categoryId;
      this.categoryName = categoryName;
      this.details = details;
    }
}
