import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  public date: Date = new Date();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

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
