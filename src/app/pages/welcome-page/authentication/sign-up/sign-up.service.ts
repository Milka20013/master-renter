import { Injectable } from '@angular/core';
import { DbService } from 'src/app/db/db.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private dbService: DbService) {}

  signUp(user: User) {
    if (this.dbService.checkUser(user)) {
      return;
    }
    this.dbService.addUser(user);
    console.log('Signed up!');
  }
}
