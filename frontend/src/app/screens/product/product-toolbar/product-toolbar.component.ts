import { Component } from '@angular/core';

@Component({
  selector: 'app-product-toolbar',
  templateUrl: './product-toolbar.component.html',
})
export class ProductToolbarComponent {
  constructor() {}
  openModal() {
    console.log('Open modal');
  }
}
