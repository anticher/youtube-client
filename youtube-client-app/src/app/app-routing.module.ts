import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/components/not-found/not-found.component';
import { ResultComponent } from './youtube/components/result/result.component';

const routes = [
//   { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: ResultComponent,
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