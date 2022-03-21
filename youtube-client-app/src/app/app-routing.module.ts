import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/components/not-found.component';
import { MainComponent } from './youtube/components/main/main.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'test', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
