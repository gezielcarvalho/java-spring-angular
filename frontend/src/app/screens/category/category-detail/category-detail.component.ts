import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
})
export class CategoryDetailComponent {
  @Input() category: Category | undefined;
}
