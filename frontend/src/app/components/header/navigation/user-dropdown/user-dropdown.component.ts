import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
})
export class UserDropdownComponent {
  isDropdownVisible = false;
  toggleDropdown($event: Event) {
    $event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  onLogout() {
    this.isDropdownVisible = false;
  }
  onOutsideClick() {
    this.isDropdownVisible = false;
  }
}
