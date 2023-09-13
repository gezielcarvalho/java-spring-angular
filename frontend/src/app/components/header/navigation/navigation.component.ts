import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @ViewChild('menuButton')
  menuButton!: ElementRef;
  @ViewChild('mobileMenu')
  mobileMenu!: ElementRef;

  toggleMobileMenu() {
    this.mobileMenu.nativeElement.classList.toggle('open');
  }
}
