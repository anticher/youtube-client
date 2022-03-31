import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemBorderColorDirective } from './directives/result-item-border-color.directive';

@NgModule({
  declarations: [
    ResultItemBorderColorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ResultItemBorderColorDirective,
  ],
})
export class SharedModule { }
