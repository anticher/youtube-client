import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
  ) { }

  public canActivate(): boolean {
    return this.isAuthCheck();
  }

  public canLoad(): boolean {
    return this.isAuthCheck();
  }

  private isAuthCheck(): boolean {
    const isAuth = localStorage.getItem('login');
    if (isAuth === 'test') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
