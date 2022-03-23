import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoButtonComponent } from './components/buttons/logo-button/logo-button.component';
import { RectangleButtonComponent } from './components/buttons/rectangle-button/rectangle-button.component';
import { SquareButtonComponent } from './components/buttons/square-button/square-button.component';
import { HexToRgbPipe } from './pipes/hex-to-rgb.pipe';

@NgModule({
  declarations: [
    SquareButtonComponent,
    RectangleButtonComponent,
    LogoButtonComponent,
    HexToRgbPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SquareButtonComponent,
    RectangleButtonComponent,
    LogoButtonComponent,
    HexToRgbPipe,
  ],
})
export class SharedModule { }
