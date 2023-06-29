import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  tokens: string[] = [];

  constructor() {}

  addToken(token: string) {
    this.tokens.push(token);
  }

  checkToken(token: string): boolean {
    for (let i = 0; i < this.tokens.length; i++) {
      if (this.tokens[i] === token) {
        return true;
      }
    }
    return false;
  }
}
