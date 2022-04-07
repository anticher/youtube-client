import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
  ) { }

  public canActivate(): boolean {
    return this.checkAuth();
  }

  public canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (!AuthService.isAuthCheck()) {
      this.router.navigate(['login']);
      return false;
    }
    return true
  }
}
