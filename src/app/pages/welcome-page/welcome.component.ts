import { Component } from '@angular/core';
import { DbService } from 'src/app/db/db.service';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'npm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent {
  token = '';
  authenticated = false;
  constructor(
    private dbService: DbService,
    private authService: AuthenticationService
  ) {}

  generateToken(): void {
    this.token = crypto.randomUUID();
    this.dbService.addToken(this.token);
  }

  checkToken(): void {
    let input = <HTMLInputElement>document.getElementById('token-input');
    if (this.dbService.checkToken(input?.value)) {
      this.authenticated = true;
      this.authService.authenticateToken();
    } else {
      console.log('nop');
    }
  }
}
