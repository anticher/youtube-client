import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
  ) {}

  login() {
    localStorage.setItem('login', 'test');
    this.router.navigate(['']);
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }

  static isAuthCheck(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isAuth = localStorage.getItem('login');
        if (isAuth === 'test') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 0);
    });
  }
}
