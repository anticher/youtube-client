import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    YoutubeModule,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
  ],
})
export class CoreModule { }
