import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class AuthModule { }
