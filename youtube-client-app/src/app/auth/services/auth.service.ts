import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginSubject = new BehaviorSubject<boolean>(false)

  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
  )
  {
    if (localStorage.getItem('login')) {
      this.loginSubject.next(true)
    }
    this.loginSubject.subscribe({
      next: (val) => {
        if (val) {
          localStorage.setItem('login', 'test');
          this.router.navigate(['']);
        } else {
          localStorage.removeItem('login');
          this.router.navigate(['login']);
          this.searchDataService.deleteResultData();
        }
      },
      error: (err) => console.log({"err": err})
    })
  }

  public login(): void {
    this.loginSubject.next(true)
  }

  public logout(): void {
    this.loginSubject.next(false)    
  }

  static isAuthCheck(): boolean {
    const isAuth = localStorage.getItem('login');
    if (isAuth === 'test') {
      return true;
    }
    return false;
  }
}
