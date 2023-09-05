import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  filteredOptions: Observable<string[]> | undefined;
  allowNewCategory = false;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  myControl = new FormControl('');
  edtImage = new FormControl('');
  strImageUrl = 'Lance';
  options: string[] = ['One', 'Two', 'Three'];
  public date: Date = new Date();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
    this.edtImage.setValue('');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    setTimeout(() => {
      this.allowNewCategory = true;
    }, 10000);
  }

  categories: Category[] = [
    { id: 2, name: 'Category 2', description: 'Category 2 description', imageUrl: 'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg'  },
    { id: 2, name: 'Electronics', description: 'Electronics description', imageUrl: 'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg' },
    { id: 3, name: 'Computers', description: 'Computers description', imageUrl: 'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg' },
    { id: 4, name: 'Magazines', description: 'Magazines description', imageUrl: 'https://cdn.pixabay.com/photo/2023/08/29/20/01/dahlia-8222054_1280.jpg' },
  ];

  create(name: string) {
    // validate name
    if (!name) {
      return;
    }
    let id = this.categories.length + 1;
    let imageUrl = this.edtImage.value || '';
    let description = 'description';
    let newCategory: Category = { id, name, description, imageUrl };
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
