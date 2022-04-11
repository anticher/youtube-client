import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ProfileModule } from './profile/profile.module';
import { SearchDataService } from './youtube/services/search-data.service';
import { AccessInterceptor } from './youtube/interceptors/access.interceptor';
import { SnippetInterceptor } from './youtube/interceptors/snippet.interceptor';
import { AdminModule } from './admin/admin.module';
import { CardsState } from './redux/items-state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxsModule.forRoot([CardsState], {
      developmentMode: !environment.production
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    YoutubeModule,
    NotFoundModule,
    AppRoutingModule,
    ProfileModule,
    AdminModule
  ],
  providers: [
    SearchDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SnippetInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
