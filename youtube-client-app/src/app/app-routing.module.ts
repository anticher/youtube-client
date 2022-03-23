import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { NotFoundComponent } from './not-found/components/not-found.component';
import { DetailsPageComponent } from './youtube/components/details-page/details-page.component';
import { MainComponent } from './youtube/components/main/main.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'test', component: NotFoundComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'result/:', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
