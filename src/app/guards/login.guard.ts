import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if(authService.isLoggedIn()){
    // router.navigate(['home'])
    return true
  } else {
    router.navigate([''])
    return false
  }
};
