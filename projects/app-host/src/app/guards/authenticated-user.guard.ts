import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatedUserGuard: CanActivateFn = (route, state) => {
  
  // const authenticateService = inject(AuthenticationService);

  // console.log("authenticatedUserGuard {isAuthenticated}", authenticateService.isAuthenticated);

  if (inject(AuthenticationService).isAuthenticated) return true;
  
  inject(Router).navigate(['/login']);
      
  return false;
};
