// add-record-modal.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
})
export class AddCategoryModalComponent {
  @Input() isModalVisible = false; // Initialize as hidden

  categoryData: Category = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
  };

  constructor(private categoryService: CategoryService) {}

  onSave() {
    if (this.categoryData.name && this.categoryData.description) {
      this.categoryService.addRecord(this.categoryData);
      this.categoryData = { id: 0, name: '', description: '', imageUrl: '' };
    }
  }

  onClose() {
    this.categoryService.closeModal();
    this.categoryData = { id: 0, name: '', description: '', imageUrl: '' };
  }
}
