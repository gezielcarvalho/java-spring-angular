import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  userActivated = false;
  userSeed: string | undefined;

  private activatedSubscription: Subscription | undefined;
  private updateDataSubscription: Subscription | undefined;
  isModalVisible = false;
  isAreaVisible = false;
  categories: Category[] = [];
  constructor(private service: CategoryService) {}

  toggleArea() {
    this.isAreaVisible = !this.isAreaVisible;
  }

  ngOnInit() {
    this.activatedSubscription = this.service.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    );
    this.categories = this.service.categories;
    this.service.openModal$.subscribe(() => {
      this.openModal();
    });
    this.service.closeModal$.subscribe(() => {
      console.log('closeModal subscription in CategoryListComponent');
      this.closeModal();
    });
    this.service.saveRecord$.subscribe((newRecord: Category) => {
      console.log('saveRecord subscription in CategoryListComponent');
      this.saveRecord(newRecord);
    });
    this.service.updateRecord$.subscribe((newRecord: Category) => {
      console.log('updateRecord subscription in CategoryListComponent');
      this.updateRecord(newRecord);
    });
    this.service.deleteRecord$.subscribe((newRecord: Category) => {
      console.log('deleteRecord subscription in CategoryListComponent');
      this.deleteRecord(newRecord);
    });
    this.updateDataSubscription = this.service.updateDataSource.subscribe(
      (newData: any) => {
        console.log('updateData subscription in CategoryListComponent');
        console.log({ newData });
        this.userSeed = newData.info.seed;
      }
    );
    this.service.updateData();
  }

  ngOnDestroy() {
    this.activatedSubscription?.unsubscribe();
    this.updateDataSubscription?.unsubscribe();
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  saveRecord(newRecord: Category) {
    console.log('saveRecord in CategoryListComponent');
    console.log({ newRecord });

    const newId = this.categories.length + 1;
    this.categories.push({ ...newRecord, id: newId });
    this.closeModal();
  }

  updateRecord(newRecord: Category) {
    console.log('updateRecord in CategoryListComponent');
    console.log({ newRecord });

    const index = this.categories.findIndex(
      (category) => category.id === newRecord.id
    );
    this.categories[index] = newRecord;
    this.closeModal();
  }

  deleteRecord(newRecord: Category) {
    console.log('deleteRecord in CategoryListComponent');
    console.log({ newRecord });

    const index = this.categories.findIndex(
      (category) => category.id === newRecord.id
    );
    this.categories.splice(index, 1);
    this.closeModal();
  }
}
