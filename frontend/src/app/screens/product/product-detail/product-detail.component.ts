import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [],
})
export class ProductDetailComponent implements OnInit {
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
}
