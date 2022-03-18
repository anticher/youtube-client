import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHidden = true
  constructor() {}

  toggleDisplay() {
    this.isHidden = !this.isHidden
  }
}
