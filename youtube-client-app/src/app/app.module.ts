import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchSortingComponent } from './search/search-sorting/search-sorting.component';
import { ProfileButtonComponent } from './profile/profile-button/profile-button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultItemComponent } from './result/result-item/result-item.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchSortingComponent,
    ProfileButtonComponent,
    NotFoundComponent,
    ResultItemComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
