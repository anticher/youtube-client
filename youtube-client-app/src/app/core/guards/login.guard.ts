import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

type LoginGuardFunc = boolean | Observable<boolean> | Promise<boolean>;

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(): LoginGuardFunc {
    return this.guardInnerFunction();
  }

  canLoad(): LoginGuardFunc {
    return this.guardInnerFunction();
  }

  guardInnerFunction(): LoginGuardFunc {
    return AuthService.isAuthCheck().then((result) => {
      if (result) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    });
  }
}
