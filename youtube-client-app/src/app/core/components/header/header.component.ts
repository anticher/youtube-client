import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSortingVisible: boolean = false;

  constructor(private auth: AuthService) {}

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
