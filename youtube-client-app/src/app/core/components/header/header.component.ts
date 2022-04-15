import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSortingVisible: boolean = false;

  public isLoginHidden: boolean = false;

  private isUserAuthsubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private searchDataService: SearchDataService,
    private router: Router,
    ) {}

  public ngOnInit(): void {
    this.isUserAuthsubscription = this.authService.isUserAuth$.subscribe((value) => {
      this.isLoginHidden = value;
      if (!value) {
        this.isSortingVisible = value;
      }
    });
  }

  public toggleDisplay(): void {
    this.isSortingVisible = !this.isSortingVisible;
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.isUserAuthsubscription.unsubscribe();
  }

  public routeToMain(): void {
    this.searchDataService.clearSearchDataSubject()
    this.router.navigate(['']);
  }
}
