import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginSubject = new BehaviorSubject<boolean>(false)
  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
  ) {
    if (localStorage.getItem('login')) {
      this.loginSubject.next(true)
    }
    this.loginSubject.subscribe({
      next: (val) => {
        console.log(val)
        if (val) {
          localStorage.setItem('login', 'test');
          this.router.navigate(['']);
        } else {
          localStorage.removeItem('login');
          this.router.navigate(['login']);
          this.searchDataService.deleteResultData();
        }
      },
      error: (err) => console.log({"err": err}),
      complete: () => console.log('subject-complete')
    })
  }

  login() {
    this.loginSubject.next(true)
  }

  logout() {
    this.loginSubject.next(false)    
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
