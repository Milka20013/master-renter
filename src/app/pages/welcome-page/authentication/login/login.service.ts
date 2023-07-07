import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db/db.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../authentication.service';
import { UserType } from 'src/app/enums/user-type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInUser?: User;
  constructor(
    private dbServive: DbService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  logIn(email: string, password: string) {
    if (
      this.dbServive.checkUserLogin(
        new User(email, password, this.authService.currentToken.type)
      )
    ) {
      this.loggedInUser = new User(
        email,
        password,
        this.authService.currentToken.type
      );
      switch (this.authService.currentToken.type) {
        case UserType.None:
          console.error('logged in as none ?');
          break;
        case UserType.Tenant:
          this.router.navigate(['tenantUser']);
          break;
        case UserType.Landlord:
          this.router.navigate(['landlord']);
      }
    } else {
      console.log('pw or email is incorrect');
    }
  }

  logOut() {
    this.loggedInUser = undefined;
  }
}
