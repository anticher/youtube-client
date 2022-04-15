import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  private isAuth: boolean = false;

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
    if (localStorage.getItem('login') === 'test') {
      this.isAuth = true;
      return this.isAuth;
    }
    this.isAuth = false;
    return this.isAuth;
  }
}
