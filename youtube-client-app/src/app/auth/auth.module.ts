import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProfileSettingsComponent,
  ],
})
export class AuthModule { }
