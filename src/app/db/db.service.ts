import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  tokens: string[] = [];
  users: User[] = [];

  constructor() {}

  addToken(token: string) {
    this.tokens.push(token);
  }

  checkToken(token: string): boolean {
    return !!this.tokens.find((x) => x == token);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  checkIfUserExist(user: User) {
    return !!this.users.find((x) => x.email == user.email);
  }

  checkUserLogin(user: User) {
    return !!this.users.find(
      (x) => x.email == user.email && x.password == user.password
    );
  }
}
