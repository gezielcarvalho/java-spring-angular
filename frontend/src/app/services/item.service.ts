import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const mock_items = [
  {
    id: 1,
    name: 'Adidas Stan Smith',
    description: 'This is the first item',
    price: 100,
    category: 'Shoes',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Nike Air Max',
    description: 'This is the second item',
    price: 200,
    category: 'Shoes',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    description: 'This is the third item',
    price: 300,
    category: 'Shoes',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Nike Air Jordan',
    description: 'This is the fourth item',
    price: 400,
    category: 'Shoes',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getItems(): Observable<any> {
    return of(mock_items);
  }

  getItem(id: number): Observable<any> {
    return of(mock_items.find((item) => item.id === id));
  }

  constructor() {}
}
