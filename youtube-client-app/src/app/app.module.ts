import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ProfileModule } from './profile/profile.module';
import { SearchDataService } from './youtube/services/search-data.service';
import { AccessInterceptor } from './youtube/interceptors/access.interceptor';
import { SnippetInterceptor } from './youtube/interceptors/snippet.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    YoutubeModule,
    NotFoundModule,
    AppRoutingModule,
    ProfileModule,
  ],
  providers: [
    SearchDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SnippetInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
