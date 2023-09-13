import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
})
export class UserDropdownComponent {
  isDropdownVisible = false;
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
