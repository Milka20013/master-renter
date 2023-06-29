import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isTokenAuthenticated = false;
  private isLoggedIn = false;
  constructor(private router: Router) {}

  authenticateToken() {
    this.isTokenAuthenticated = true;
  }
}
