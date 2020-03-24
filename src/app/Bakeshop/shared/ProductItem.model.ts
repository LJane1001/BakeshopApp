export class ProductItem {
    public id: number;
    public name: string;
    public price: number;
    public imageUrl: string;
    public categoryId: number;

    constructor(id: number, name: string, price: number, imageUrl: string, categoryId: number){
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.categoryId = categoryId;
    }
}
