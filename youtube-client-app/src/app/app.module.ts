import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchDataService } from './services/search-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchSortingComponent } from './components/search/search-sorting/search-sorting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResultItemComponent } from './components/result/result-item/result-item.component';
import { ResultComponent } from './components/result/result.component';
import { SquareButtonComponent } from './components/buttons/square-button/square-button.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { MainComponent } from './components/main/main.component';
import { RectangleButtonComponent } from './components/buttons/rectangle-button/rectangle-button.component';
import { LogoButtonComponent } from './components/buttons/logo-button/logo-button.component';
import { StatisticsItemComponent } from './components/result/statistics-item/statistics-item.component';
import { ResultItemBorderColorDirective } from './directives/result-item-border-color.directive';

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
    ResultItemBorderColorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
