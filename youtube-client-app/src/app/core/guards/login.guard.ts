import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

type loginGuardFunc = boolean | Observable<boolean> | Promise<boolean>

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(): loginGuardFunc {
    return this.guardInnerFunction()
  }

  canLoad(): loginGuardFunc {
    return this.guardInnerFunction()
  }

  guardInnerFunction(): loginGuardFunc {
    return AuthService.isAuthCheck().then((result) => {
      if (result) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    });
  }
}
