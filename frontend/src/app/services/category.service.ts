// category.service.ts
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private addRecordSource = new Subject<Category>();
  private closeModalSource = new Subject<void>();
  private openModalSource = new Subject<void>();

  addRecord$ = this.addRecordSource.asObservable();
  closeModal$ = this.closeModalSource.asObservable();
  openModal$ = this.openModalSource.asObservable();

  categories: Category[] = [
    {
      id: 2,
      name: 'Category 2',
      description: 'Category 2 description',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg',
    },
    {
      id: 2,
      name: 'Electronics',
      description: 'Electronics description',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg',
    },
    {
      id: 3,
      name: 'Computers',
      description: 'Computers description',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg',
    },
    {
      id: 4,
      name: 'Magazines',
      description: 'Magazines description',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg',
    },
  ];

  addCategory(category: Category) {
    this.categories.push(category);
  }

  addRecord(newRecord: Category) {
    this.addRecordSource.next(newRecord);
  }

  closeModal() {
    this.closeModalSource.next();
  }

  openModal() {
    this.openModalSource.next();
  }
}
