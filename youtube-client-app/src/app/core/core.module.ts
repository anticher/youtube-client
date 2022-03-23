import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    YoutubeModule,
    SharedModule,
    AuthModule,
    RouterModule,
    ProfileModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
