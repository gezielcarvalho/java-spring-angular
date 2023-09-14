import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first product',
      price: 100,
      categoryId: 1,
      isAvailable: true,
      quantityInStock: 100,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the second product',
      price: 200,
      categoryId: 2,
      isAvailable: true,
      quantityInStock: 200,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the third product',
      price: 300,
      categoryId: 3,
      isAvailable: true,
      quantityInStock: 300,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the fourth product',
      price: 400,
      categoryId: 4,
      isAvailable: true,
      quantityInStock: 400,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    // get a copy of the products array instead of the original array
    return this.products.slice();
  }
}
