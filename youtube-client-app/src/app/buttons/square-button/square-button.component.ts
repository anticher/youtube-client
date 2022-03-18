import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss'],
})
export class SquareButtonComponent {
  @Input() bg: string = '';
}
