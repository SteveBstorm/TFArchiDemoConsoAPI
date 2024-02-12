import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService : AuthService = inject(AuthService)
  console.log(authService.isTokenExist);

  return authService.isTokenExist;
};
