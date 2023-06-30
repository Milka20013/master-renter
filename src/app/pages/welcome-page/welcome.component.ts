import { Component } from '@angular/core';
import { DbService } from 'src/app/db/db.service';
import { AuthenticationService } from './authentication/authentication.service';
import { Token } from 'src/app/models/token';
import { UserType } from 'src/app/enums/user-type';

@Component({
  selector: 'npm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent {
  token: Token = Token.Empty;
  showGeneratedToken = false;
  authenticated = false;
  constructor(
    private dbService: DbService,
    private authService: AuthenticationService
  ) {}

  generateLandlordToken(): void {
    this.token = this.dbService.generateToken(UserType.Landlord);
    this.showGeneratedToken = true;
  }

  generateTenantToken(): void {
    this.token = this.dbService.generateToken(UserType.Tenant);
    this.showGeneratedToken = true;
  }

  checkToken(): void {
    let input = <HTMLInputElement>document.getElementById('token-input');
    if (this.dbService.checkToken(input.value)) {
      this.authenticated = true;
      this.authService.authenticateToken(this.dbService.getToken(input.value));
    } else {
      console.log('nop');
    }
  }
}
