import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../login-service.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authenticationService.isLoggedIn()) {
      return false;
    }
    return true;
  }
  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authenticationService.isLoggedIn()) {
      return false;
    }
    return true;
  }
}
