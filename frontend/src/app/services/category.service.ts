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
