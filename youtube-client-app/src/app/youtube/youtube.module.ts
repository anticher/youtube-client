import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { ProfileButtonComponent } from './components/profile-button/profile-button.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultComponent } from './components/result/result.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchSortingComponent } from './components/search/search-sorting/search-sorting.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';
import { FilterSearchResultsPipe } from './pipes/filter-search-results.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchSortingComponent,
    ResultItemComponent,
    ResultComponent,
    StatisticsItemComponent,
    LogoButtonComponent,
    SearchButtonComponent,
    ProfileButtonComponent,
    SearchButtonComponent,
    SettingsButtonComponent,
    MoreButtonComponent,
    ProfileSettingsComponent,
    FilterSearchResultsPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    LogoButtonComponent,
    SearchItemComponent,
    SearchButtonComponent,
    SearchButtonComponent,
    SettingsButtonComponent,
    SearchSortingComponent,
    ProfileSettingsComponent,
    ProfileButtonComponent,
    ResultComponent,
  ],
})
export class YoutubeModule { }