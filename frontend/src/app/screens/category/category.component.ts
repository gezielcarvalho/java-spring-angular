import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  filteredOptions: Observable<string[]> | undefined;
  myControl = new FormControl('');
  edtImage = new FormControl('');
  strImageUrl = 'Lance';
  options: string[] = ['One', 'Two', 'Three'];
  public date: Date = new Date();

  constructor() {}
}
