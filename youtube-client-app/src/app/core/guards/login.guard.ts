import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(
    private router: Router,
  ) {}

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return AuthService.isAuthCheck().then((result) => {
      if (result) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    });
  }
}
