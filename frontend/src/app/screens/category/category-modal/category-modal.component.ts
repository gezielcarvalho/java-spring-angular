// add-record-modal.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
})
export class CategoryModalComponent implements OnInit {
  @Input() isModalVisible = false; // Initialize as hidden
  selectedCategory: Category | undefined;

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.categorySelected.subscribe((category: Category) => {
      this.categoryService.openModal();
      this.selectedCategory = category;
    });
    this.categoryService.categoryDeleted.subscribe((category: Category) => {
      this.selectedCategory = category;
      this.categoryService.deleteRecord(category);
    });
    this.categoryService.openModal$.subscribe(() => {
      this.selectedCategory = undefined;
    });
  }

  onSave(newCategory: Category) {
    if (newCategory.name && newCategory.description) {
      if (this.selectedCategory) {
        this.categoryService.updateRecord({
          ...newCategory,
          id: this.selectedCategory.id,
        });
      } else {
        this.categoryService.saveRecord(newCategory);
      }
    }
  }

  onClose() {
    this.categoryService.closeModal();
  }
}
