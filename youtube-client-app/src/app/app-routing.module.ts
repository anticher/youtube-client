import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { NotFoundComponent } from './not-found/components/not-found/not-found.component';

const routes = [
//   { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: MainComponent,
    // loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    // canLoad: [LoginGuard],
    // canActivate: [LoginGuard],
  },
//   { path: 'result/:', component: DetailsPageComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    // loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
    // canLoad: [LoginGuard],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }