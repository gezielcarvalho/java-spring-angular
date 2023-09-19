import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
})
export class UserDropdownComponent {
  isDropdownVisible = false;

  constructor(private authService: AuthService) {}

  toggleDropdown($event: Event) {
    $event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  onLogout() {
    this.isDropdownVisible = false;
    this.authService.logout();
  }
  onOutsideClick() {
    this.isDropdownVisible = false;
  }
}
