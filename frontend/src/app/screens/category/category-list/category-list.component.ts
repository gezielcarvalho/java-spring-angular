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
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.openModal$.subscribe(() => {
      this.openModal();
    });
    this.categoryService.closeModal$.subscribe(() => {
      console.log('closeModal subscription in CategoryListComponent');
      this.closeModal();
    });
    this.categoryService.addRecord$.subscribe((newRecord: Category) => {
      console.log('addRecord subscription in CategoryListComponent');
      this.addRecord(newRecord);
    });
  }

  categories: Category[] = [
    new Category(
      1,
      'Category 1',
      'Category 1 description',
      'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg'
    ),
    new Category(
      2,
      'Category 2',
      'Category 2 description',
      'https://cdn.pixabay.com/photo/2023/05/29/13/10/shoes-8026038_1280.jpg'
    ),
    new Category(
      3,
      'Category 3',
      'Category 3 description',
      'https://cdn.pixabay.com/photo/2023/04/03/17/46/coffee-7897414_1280.jpg'
    ),
  ];

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
