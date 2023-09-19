import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {}

  login() {
    this.isLoggedIn = true;
    console.log('Login button clicked');
  }

  logout() {
    this.isLoggedIn = false;
    console.log('Logout button clicked');
  }
}
