import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'npm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  @Output() onSignUpInstead: EventEmitter<void> = new EventEmitter<void>();

  updateEmail(email: string) {
    this.email = email;
  }
  updatePw(password: string) {
    this.password = password;
  }
  constructor(private loginService: LoginService) {}
  login() {
    this.loginService.logIn(this.email, this.password);
  }

  onClickSignUpInstead() {
    this.onSignUpInstead.emit();
  }
}
