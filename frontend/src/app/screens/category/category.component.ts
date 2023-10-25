import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Observable } from 'rxjs/internal/Observable';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit, OnDestroy {
  updateDataSubscription: Subscription | undefined;
  filteredOptions: Observable<string[]> | undefined;
  myControl = new FormControl('');
  edtImage = new FormControl('');
  strImageUrl = 'Lance';
  options: string[] = ['One', 'Two', 'Three'];
  public date: Date = new Date();

  constructor(private service: CategoryService) {}

  ngOnDestroy(): void {
    this.updateDataSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.updateDataSubscription = this.service.updateDataSource.subscribe(
      (newData: any) => {
        console.log('updateData subscription in CategoryComponent');
        console.log({ newData });
      }
    );
  }
}
