import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [],
})
export class ProductDetailComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  product: Product | undefined;
  id: number | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id);
    });
  }

  onEditRecord(product: Product) {
    console.log('Edit record: ' + product.id);
  }
  onDeleteRecord(product: Product) {
    console.log('Delete record: ' + product.id);
  }
}
