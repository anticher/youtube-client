import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
