import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  constructor(private categoryService: CategoryService) {}
  @Input() category: Category | undefined;
  onSelected() {
    this.categoryService.categorySelected.emit(this.category);
  }
}
