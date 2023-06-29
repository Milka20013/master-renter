import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivateFn, Router } from '@angular/router';

export function authenticationGuard(): CanActivateFn {
  return () =>
    inject(AuthenticationService).isAuthenticated
      ? true
      : inject(Router).navigate(['']);
}
