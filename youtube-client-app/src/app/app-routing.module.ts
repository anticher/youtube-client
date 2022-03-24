import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { LoginGuard } from './core/guards/login.guard';
import { NotFoundComponent } from './not-found/components/not-found.component';
import { DetailsPageComponent } from './youtube/components/details-page/details-page.component';
import { MainComponent } from './youtube/components/main/main.component';

const routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  { path: 'result/:', component: DetailsPageComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
    canLoad: [LoginGuard],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
