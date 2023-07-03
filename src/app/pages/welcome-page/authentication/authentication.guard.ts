import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivateFn, Router } from '@angular/router';
import { UserType } from 'src/app/enums/user-type';

export function authenticationGuard(type: UserType): CanActivateFn {
  return () =>
    inject(AuthenticationService).isAuthenticated == type
      ? true
      : inject(Router).navigate(['']);
}
