import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  isModalVisible = false;
  isAreaVisible = false;
  categories: Category[] = [];
  constructor(private service: CategoryService) {}

  toggleArea() {
    this.isAreaVisible = !this.isAreaVisible;
  }

  ngOnInit() {
    this.categories = this.service.categories;
    this.service.openModal$.subscribe(() => {
      this.openModal();
    });
    this.service.closeModal$.subscribe(() => {
      console.log('closeModal subscription in CategoryListComponent');
      this.closeModal();
    });
    this.service.addRecord$.subscribe((newRecord: Category) => {
      console.log('addRecord subscription in CategoryListComponent');
      this.addRecord(newRecord);
    });
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  addRecord(newRecord: Category) {
    console.log('addRecord in CategoryListComponent');
    const newId = this.categories.length + 1;
    this.categories.push({ ...newRecord, id: newId });
    this.closeModal();
  }
}
