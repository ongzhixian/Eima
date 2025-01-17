import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatedUserGuard: CanActivateFn = (route, state) => {
  
  if (inject(AuthenticationService).isAuthenticated) return true;
  
  inject(Router).navigate(['/login']);
      
  return false;
};
