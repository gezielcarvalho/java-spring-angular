import { Component } from '@angular/core';

export interface Category {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DS Catalog';
  categories: Category[] = [
    { id: 1, name: 'Books' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Computers' },
    { id: 4, name: 'Magazines' },
  ];

  create(name: string) {
    let id = this.categories.length + 1;
    let newCategory: Category = { id, name };
    this.categories.push(newCategory);
  }

  destroy(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter(
        (category) => category.id !== id
      );
    }
  }
}
