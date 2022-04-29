import {
  Component, HostListener, OnDestroy, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

const headerMobileWidth = 636;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostListener('window:resize')
  onResize() {
    this.controlWindowWidth();
  }

  public isSearchButtonDisabled: boolean = false;

  public isMobileWidth: boolean = false;

  public isSearchBlockVisible: boolean = false;

  public isSortingBlockVisible: boolean = false;

  public isLogoDisabled: boolean = false;

  public isUserAuth: boolean = false;

  private subscriptions!: Subscription;

  constructor(
    private authService: AuthService,
    private searchDataService: SearchDataService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.controlWindowWidth();
    this.subscriptions = this.authService.isUserAuth$.subscribe((value) => {
      this.isUserAuth = value;
      this.isLogoDisabled = !value;
      if (!value) {
        this.isSortingBlockVisible = value;
      }
    });
  }

  public controlWindowWidth(): void {
    if (window.innerWidth <= headerMobileWidth) {
      this.isMobileWidth = true;
    } else {
      this.isMobileWidth = false;
      this.isSearchBlockVisible = false;
    }
  }

  public toggleDisplay(): void {
    this.isSortingBlockVisible = !this.isSortingBlockVisible;
  }

  public toggleSearchBlock(): void {
    if (this.isSearchBlockVisible) {
      this.isSearchBlockVisible = false;
      this.isSortingBlockVisible = false;
    } else {
      this.isSearchBlockVisible = true;
    }
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public routeToMain(): void {
    this.searchDataService.searchString$.next('');
    this.router.navigate(['']);
  }
}
