import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    YoutubeModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
