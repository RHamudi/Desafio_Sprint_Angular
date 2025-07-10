import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const redirectAutoLoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if(authService.isLoggedIn()){
    router.navigate(['home'])
    return false
  }

  return true;
};
