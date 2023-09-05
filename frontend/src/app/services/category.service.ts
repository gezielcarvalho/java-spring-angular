// record.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private openModalSource = new Subject<void>();
  private closeModalSource = new Subject<void>();

  openModal$ = this.openModalSource.asObservable();
  closeModal$ = this.closeModalSource.asObservable();

  openModal() {
    console.log('openModal in Service');
    this.openModalSource.next();
  }

  closeModal() {
    console.log('closeModal in Service');
    this.closeModalSource.next();
  }
}
