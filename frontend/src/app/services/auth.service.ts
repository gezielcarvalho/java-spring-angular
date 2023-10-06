import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
    return promise;
  }

  login() {
    this.isLoggedIn = true;
    console.log('Login button clicked');
  }

  logout() {
    this.isLoggedIn = false;
    console.log('Logout button clicked');
  }
}
