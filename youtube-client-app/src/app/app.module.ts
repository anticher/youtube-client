import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { CardsState } from './redux/youtube-items-state';

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
    FormsModule,
    CoreModule,
    YoutubeModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
