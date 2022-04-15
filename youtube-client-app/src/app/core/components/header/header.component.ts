import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSortingVisible: boolean = false;

  public isLoginHidden: boolean = false;

  private isUserAuthsubscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
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

  ngOnDestroy(): void {
    this.isUserAuthsubscription.unsubscribe();
  }
}
