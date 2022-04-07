import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { ProfileButtonComponent } from './components/profile-button/profile-button.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultComponent } from './components/result/result.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';
import { FilterSearchResultsPipe } from './pipes/filter-search-results.pipe';
import { SharedModule } from '../shared/shared.module';
import { ResultItemBorderColorDirective } from './directives/result-item-border-color.directive';
import { SetColorByDatePipe } from './pipes/set-color-by-date.pipe';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { HexToRgbPipe } from './pipes/hex-to-rgb.pipe';
import { YoutubeRoutingModule } from './youtube-router.module';

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
    ResultItemBorderColorDirective,
    SetColorByDatePipe,
    DetailsPageComponent,
    HexToRgbPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    YoutubeRoutingModule
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
    DetailsPageComponent,
  ],
})
export class YoutubeModule { }
