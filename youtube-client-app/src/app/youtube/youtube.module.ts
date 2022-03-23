import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';
import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';

import { ResultItemBorderColorDirective } from './directives/result-item-border-color.directive';
import { FilterSearchResultsPipe } from './pipes/filter-search-results.pipe';
import { SharedModule } from '../shared/shared.module';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchSortingComponent,
    ResultItemComponent,
    ResultComponent,
    MainComponent,
    StatisticsItemComponent,
    ResultItemBorderColorDirective,
    FilterSearchResultsPipe,
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SearchItemComponent,
    SearchSortingComponent,
    MainComponent,
  ],
})
export class YoutubeModule { }
