// category.service.ts
import { EventEmitter, Injectable } from '@angular/core';

import { Subject, from } from 'rxjs';

import { Category } from '../models/category.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  activatedEmitter = new Subject<boolean>();
  // TODO: encapsulate
  categorySelected = new EventEmitter<Category>();
  categoryDeleted = new EventEmitter<Category>();

  private saveRecordSource = new Subject<Category>();
  private updateRecordSource = new Subject<Category>();
  private deleteRecordSource = new Subject<Category>();
  private closeModalSource = new Subject<void>();
  private openModalSource = new Subject<void>();

  public updateDataSource = new Subject<any>();

  saveRecord$ = this.saveRecordSource.asObservable();
  updateRecord$ = this.updateRecordSource.asObservable();
  deleteRecord$ = this.deleteRecordSource.asObservable();
  closeModal$ = this.closeModalSource.asObservable();
  openModal$ = this.openModalSource.asObservable();

  categories: Category[] = [
    {
      id: 1,
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

  activateParagraph(): Subject<boolean> {
    return this.activatedEmitter;
  }

  saveRecord(newRecord: Category) {
    this.saveRecordSource.next(newRecord);
  }

  updateRecord(newRecord: Category) {
    this.updateRecordSource.next(newRecord);
  }

  updateData() {
    from(this.http.get('https://randomuser.me/api/')).subscribe((data) => {
      this.updateDataSource.next(data);
    });
  }

  deleteRecord(record: Category) {
    this.deleteRecordSource.next(record);
  }

  closeModal() {
    this.closeModalSource.next();
  }

  openModal() {
    this.openModalSource.next();
  }
}
