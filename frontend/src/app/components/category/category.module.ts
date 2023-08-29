import { NgModule } from '@angular/core';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';

import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBadgeModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    CommonModule,
    RouterModule,
  ],
  exports: [CategoryComponent],
})
export class CategoryModule {}
