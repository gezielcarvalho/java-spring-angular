export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public categoryId: number,
    public isAvailable: boolean,
    public quantityInStock: number,
    public imageUrl?: string
  ) {}
}
