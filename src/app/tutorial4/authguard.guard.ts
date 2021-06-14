import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/tutorial4/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  constructor(private authService: AuthServiceService, private router: Router) {}

  private checkLogin(url: string): true|UrlTree{
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/tutorial4');
  }
}
