import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/auth.models';

/**
 * Role Guard - Protects routes based on user roles
 * Usage: canActivate: [roleGuard], data: { roles: [UserRole.ADMIN] }
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRoles = route.data['roles'] as UserRole[];

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // Check if user has any of the required roles
  const hasRequiredRole = requiredRoles?.some((role) =>
    authService.hasRole(role)
  );

  if (!hasRequiredRole) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
