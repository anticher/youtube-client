import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSortingHidden: boolean = true;

  public toggleDisplay() {
    this.isSortingHidden = !this.isSortingHidden;
  }
}
