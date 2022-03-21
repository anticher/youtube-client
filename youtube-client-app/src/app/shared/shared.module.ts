import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoButtonComponent } from './components/buttons/logo-button/logo-button.component';
import { RectangleButtonComponent } from './components/buttons/rectangle-button/rectangle-button.component';
import { SquareButtonComponent } from './components/buttons/square-button/square-button.component';

@NgModule({
  declarations: [
    SquareButtonComponent,
    RectangleButtonComponent,
    LogoButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SquareButtonComponent,
    RectangleButtonComponent,
    LogoButtonComponent,
  ],
})
export class SharedModule { }
