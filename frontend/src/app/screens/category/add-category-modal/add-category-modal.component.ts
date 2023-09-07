// add-record-modal.component.ts
import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
})
export class AddCategoryModalComponent {
  @Input() isModalVisible = false; // Initialize as hidden

  constructor(private categoryService: CategoryService) {}

  onSave(newCategory: Category) {
    if (newCategory.name && newCategory.description) {
      this.categoryService.addRecord(newCategory);
    }
  }

  onClose() {
    this.categoryService.closeModal();
  }
}
