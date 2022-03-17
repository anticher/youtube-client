import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchSortingComponent } from './search/search-sorting/search-sorting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultItemComponent } from './result/result-item/result-item.component';
import { ResultComponent } from './result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareButtonComponent } from './buttons/square-button/square-button.component';
import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component';
import { MainComponent } from './main/main.component';
import { RectangleButtonComponent } from './buttons/rectangle-button/rectangle-button.component';
import { LogoButtonComponent } from './buttons/logo-button/logo-button.component';
import { StatisticsItemComponent } from './result/statistics-item/statistics-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchSortingComponent,
    NotFoundComponent,
    ResultItemComponent,
    ResultComponent,
    SquareButtonComponent,
    ProfileSettingsComponent,
    MainComponent,
    RectangleButtonComponent,
    LogoButtonComponent,
    StatisticsItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
