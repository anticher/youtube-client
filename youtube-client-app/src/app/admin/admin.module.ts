import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NewCardFormComponent } from './components/new-card-form/new-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPageComponent,
    NewCardFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminPageComponent,
    NewCardFormComponent
  ]
})
export class AdminModule { }
