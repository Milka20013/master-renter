import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'npm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  @Output() onSignUpInstead: EventEmitter<void> = new EventEmitter<void>();

  constructor(private loginService: LoginService) {}
  login() {
    const email = (<HTMLInputElement>document.getElementById('email-input'))
      .value;
    const password = (<HTMLInputElement>(
      document.getElementById('password-input')
    )).value;
    this.loginService.logIn(email, password);
  }

  onClickSignUpInstead() {
    this.onSignUpInstead.emit();
  }
}
