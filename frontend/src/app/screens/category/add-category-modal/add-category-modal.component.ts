// add-record-modal.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
})
export class AddCategoryModalComponent {
  @Input() isModalVisible = false; // Initialize as hidden
  @Output() recordAdded = new EventEmitter<any>();
  recordData = {
    name: '',
    description: '',
  };

  constructor(private categoryService: CategoryService) {}

  onSave() {
    if (this.recordData.name && this.recordData.description) {
      this.recordAdded.emit(this.recordData);
      this.recordData = { name: '', description: '' };
    }
  }

  onClose() {
    this.categoryService.closeModal();
    this.recordData = { name: '', description: '' };
  }
}
