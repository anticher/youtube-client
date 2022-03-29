import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSortingVisible: boolean = true;

  public toggleDisplay(): void {
    this.isSortingVisible = !this.isSortingVisible;
  }
}
