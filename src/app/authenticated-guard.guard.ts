import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router=inject(Router)
  console.log(authService.currentUser())
  if(authService.currentUser()){
    return true
  }
  else{
     return router.navigate(['login']);
  } 
};
