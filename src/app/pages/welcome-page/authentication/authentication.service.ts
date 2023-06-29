import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _authenticatedToken: Token = Token.Empty;
  private _isAuthenticated = true;
  constructor(private router: Router) {}

  authenticateToken(token: Token) {
    this._authenticatedToken = token;
    this._isAuthenticated = true;
  }

  public get currentToken(): Token {
    return this._authenticatedToken;
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
