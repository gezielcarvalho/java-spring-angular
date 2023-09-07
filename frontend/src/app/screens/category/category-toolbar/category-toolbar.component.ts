import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-toolbar',
  templateUrl: './category-toolbar.component.html',
})
export class CategoryToolbarComponent {
  constructor(private categoryService: CategoryService) {}

  openModal() {
    console.log('openModal');
    this.categoryService.openModal();
  }
}
