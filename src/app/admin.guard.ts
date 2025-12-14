// src/app/admin.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../../src/app/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  console.log(route)
  console.log(state)
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  } else {
    // Redirect non-admins to the standard dashboard
    router.navigate(['/dashboard']); 
    alert('You do not have administrative access.');
    return false;
  }
};
