import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-button',
  templateUrl: './logo-button.component.html',
  styleUrls: ['./logo-button.component.scss'],
})
export class LogoButtonComponent {
  @Input() set isDisabled(isDisabled: boolean) {
    this.isButtonDisabled = isDisabled;
  }

  public isButtonDisabled: boolean = false;
}
