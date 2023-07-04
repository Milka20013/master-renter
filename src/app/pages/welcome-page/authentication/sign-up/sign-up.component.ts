import { Component, EventEmitter, Output } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'npm-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent {
  @Output() onLogInInstead: EventEmitter<void> = new EventEmitter<void>();
  email: string = '';
  password1: string = '';
  password2: string = '';

  constructor(
    private signUpService: SignUpService,
    private authService: AuthenticationService
  ) {}

  updateEmail(email: string) {
    this.email = email;
  }
  updatePw1(password: string) {
    this.password1 = password;
  }
  updatePw2(password: string) {
    this.password2 = password;
  }
  signUp() {
    if (this.password1.length <= 4) {
      console.log('pw is too short');
      return;
    }
    if (this.password1 !== this.password2) {
      console.log('pw1 is not equal to pw2');
      return;
    }
    if (
      !this.signUpService.signUp(
        new User(this.email, this.password1, this.authService.currentToken.type)
      )
    ) {
      return;
    }
    this.onClickLogInInstead();
  }

  onClickLogInInstead() {
    this.onLogInInstead.emit();
  }
}
