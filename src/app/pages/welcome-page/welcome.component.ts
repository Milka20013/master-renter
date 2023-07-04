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
  inputValue = '';
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

  updateInputValue(value: string) {
    this.inputValue = value;
  }
  checkToken(): void {
    if (this.dbService.checkToken(this.inputValue)) {
      this.authenticated = true;
      this.authService.authenticateToken(
        this.dbService.getToken(this.inputValue)
      );
    } else {
      console.log('nop');
    }
  }
}
