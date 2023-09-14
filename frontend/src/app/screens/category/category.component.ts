import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
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
}
