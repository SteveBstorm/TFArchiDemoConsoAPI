import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminrequiredGuard: CanActivateFn = (route, state) => {
  let _authService : AuthService = inject(AuthService)
  console.log(_authService.getRole())
  if(_authService.getRole() == "Admin")
    return true
  return false
};
