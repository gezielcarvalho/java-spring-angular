import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styles: [],
})
export class ItemDetailsComponent implements OnInit {
  item = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    !isNaN(id) &&
      this.itemService.getItem(id).subscribe((data) => {
        this.item = data;
      });
  }

  addToCart() {
    console.log('Add to cart');
  }
}
