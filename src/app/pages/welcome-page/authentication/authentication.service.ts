import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/enums/user-type';
import { Token } from 'src/app/models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _authenticatedToken: Token = Token.Empty;
  private _isAuthenticated = UserType.None;
  constructor(private router: Router) {}

  authenticateToken(token: Token) {
    this._authenticatedToken = token;
    this._isAuthenticated = token.type;
  }

  public get currentToken(): Token {
    return this._authenticatedToken;
  }

  public get isAuthenticated(): UserType {
    return this._isAuthenticated;
  }
}
