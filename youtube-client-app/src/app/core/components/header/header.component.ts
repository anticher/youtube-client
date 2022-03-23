import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHidden = true;

  constructor(private auth: AuthService) {}

  toggleDisplay() {
    this.isHidden = !this.isHidden;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
