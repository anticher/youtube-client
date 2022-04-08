import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSortingVisible: boolean = false;

  public isLoginHidden: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loginSubject.subscribe((value) => {
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
}
