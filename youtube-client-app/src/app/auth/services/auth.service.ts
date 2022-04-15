import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
  ) {}

  public checkIsAuth(): void {
    if (localStorage.getItem('login')) {
      this.isUserAuth$.next(true);
    } else {
      this.router.navigate(['login']);
    }
  }

  public login(): void {
    this.isUserAuth$.next(true);
    localStorage.setItem('login', 'test');
    this.router.navigate(['']);
  }

  public logout(): void {
    this.isUserAuth$.next(false);
    localStorage.removeItem('login');
    this.router.navigate(['login']);
    this.searchDataService.clearSearchDataSubject();
  }
}
