import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHidden = false
  constructor() {}

  toggleDisplay() {
    this.isHidden = !this.isHidden
  }
}
