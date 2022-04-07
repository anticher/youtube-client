import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DetailsPageComponent } from './youtube/components/details-page/details-page.component';

const routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  { path: 'result/:', component: DetailsPageComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
