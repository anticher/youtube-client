import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    LoginPageComponent,
    LoginFormComponent,
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
