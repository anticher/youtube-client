import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
  ) { }

  public login(): void {
    localStorage.setItem('login', 'test');
    this.router.navigate(['']);
  }

  public logout(): void {
    localStorage.removeItem('login');
    this.router.navigate(['login']);
    this.searchDataService.deleteResultData();
  }

  // static isAuthCheck(): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const isAuth = localStorage.getItem('login');
  //       if (isAuth === 'test') {
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     }, 0);
  //   });
  // }

  static isAuthCheck(): boolean {
    const isAuth = localStorage.getItem('login');
    if (isAuth === 'test') {
      return true;
    }
    return false;
  }
}
