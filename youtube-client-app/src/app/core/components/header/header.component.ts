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

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.loginSubject.subscribe((value) => this.isLoginHidden = value)
  }

  public toggleDisplay(): void {
    this.isSortingVisible = !this.isSortingVisible;
  }

  public login(): void {
    this.auth.login();
  }

  public logout(): void {
    this.auth.logout();
  }
}
