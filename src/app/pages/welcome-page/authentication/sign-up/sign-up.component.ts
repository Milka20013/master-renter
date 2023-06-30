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

  constructor(
    private signUpService: SignUpService,
    private authService: AuthenticationService
  ) {}

  signUp() {
    const email = (<HTMLInputElement>document.getElementById('email-input'))
      .value;
    const password1 = (<HTMLInputElement>(
      document.getElementById('password-input-1')
    )).value;
    const password2 = (<HTMLInputElement>(
      document.getElementById('password-input-2')
    )).value;
    if (password1 !== password2) {
      console.log('pw1 is not equal to pw2');
      return;
    }
    if (
      !this.signUpService.signUp(
        new User(email, password1, this.authService.currentToken.type)
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
