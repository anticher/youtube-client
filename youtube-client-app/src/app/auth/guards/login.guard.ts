import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

type LoginGuardFunc = boolean | Observable<boolean> | Promise<boolean>;

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
  ) {}

  public canActivate(): LoginGuardFunc {
    return this.guardInnerFunction();
  }

  public canLoad(): LoginGuardFunc {
    return this.guardInnerFunction();
  }

  private guardInnerFunction(): LoginGuardFunc {
    return AuthService.isAuthCheck().then((result) => {
      if (result) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    });
  }
}
