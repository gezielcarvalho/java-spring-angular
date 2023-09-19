import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
})
export class LoginButtonComponent {
  faLock = faLock;

  constructor(private authService: AuthService) {}

  onLogin() {
    console.log('Login button clicked');
    this.authService.login();
  }
}
