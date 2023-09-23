import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
})
export class ItemItemComponent {
  @Input() item: any | undefined;
}
