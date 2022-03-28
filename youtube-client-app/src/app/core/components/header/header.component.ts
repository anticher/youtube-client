import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSortingHidden = true;

  isLoginHidden = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.loginSubject.subscribe(val => this.isLoginHidden = val)
  }

  toggleDisplay(hide?: boolean) {
    if (hide) {
      this.isSortingHidden = true;
    } else {
      this.isSortingHidden = !this.isSortingHidden;
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
