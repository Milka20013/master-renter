import { Component } from '@angular/core';

@Component({
  selector: 'npm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less'],
})
export class AuthenticationComponent {
  isSigningUp = true;

  onSignUpInstead() {
    this.isSigningUp = true;
  }

  onLoginInstead() {
    this.isSigningUp = false;
  }
}
