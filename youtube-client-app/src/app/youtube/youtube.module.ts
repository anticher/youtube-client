import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeRoutingModule } from './youtube-router.module';

import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultComponent } from './components/result/result.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';
import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';

import { FilterSearchResultsPipe } from './pipes/filter-search-results.pipe';
import { ResultItemBorderColorDirective } from './directives/result-item-border-color.directive';
import { SetColorByDatePipe } from './pipes/set-color-by-date.pipe';
import { HexToRgbPipe } from './pipes/hex-to-rgb.pipe';

import { AccessInterceptor } from './interceptors/access.interceptor';
import { SnippetInterceptor } from './interceptors/snippet.interceptor';
import { BaseInterceptor } from './interceptors/base.interceptor';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchSortingComponent,
    ResultItemComponent,
    ResultComponent,
    StatisticsItemComponent,
    LogoButtonComponent,
    SearchButtonComponent,
    SearchButtonComponent,
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
    RouterModule,
    YoutubeRoutingModule,
  ],
  exports: [
    LogoButtonComponent,
    SearchItemComponent,
    SearchButtonComponent,
    SearchButtonComponent,
    SearchSortingComponent,
    ProfileSettingsComponent,
    ResultComponent,
    DetailsPageComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SnippetInterceptor, multi: true },
  ],
})
export class YoutubeModule { }
