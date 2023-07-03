import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../models/token';
import { UserType } from '../enums/user-type';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  tokens: Token[] = [];
  users: User[] = [];

  constructor() {}

  generateToken(type: UserType): Token {
    let token = new Token(crypto.randomUUID(), type);
    this.addToken(token);
    return token;
  }

  addToken(token: Token) {
    if (token.type == UserType.None || token.guid.toLowerCase() === 'none') {
      return;
    }
    this.tokens.push(token);
  }

  checkToken(token: string): boolean {
    return !!this.tokens.find((x) => x.guid == token);
  }

  getToken(token: string): Token {
    let foundToken = this.tokens.find((x) => x.guid == token);
    if (foundToken !== undefined) {
      return foundToken;
    }
    return new Token('none', UserType.None);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  checkIfUserExist(user: User) {
    return !!this.users.find((x) => x.email == user.email);
  }

  checkUserLogin(user: User) {
    return !!this.users.find(
      (x) =>
        x.email == user.email &&
        x.password == user.password &&
        x.type == user.type
    );
  }
}
