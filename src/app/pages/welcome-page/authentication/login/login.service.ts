import { Injectable } from '@angular/core';
import { DbService } from 'src/app/db/db.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInUser?: User;
  constructor(private dbServive: DbService) {}

  logIn(email: string, password: string) {
    if (this.dbServive.checkUser(new User(email, password))) {
      this.loggedInUser = new User(email, password);
      console.log('logged in!');
    } else {
      console.log('pw or email is incorrect');
    }
  }

  logOut() {
    this.loggedInUser = undefined;
  }
}
