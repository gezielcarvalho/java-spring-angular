import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  items: any = [];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
}
