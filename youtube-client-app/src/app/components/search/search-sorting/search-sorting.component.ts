import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export class SearchSortingComponent {
  constructor(private searchDataService: SearchDataService) { }

  public dateSort(): void {
    this.searchDataService.sortResultByDate();
  }

  public viewsSort(): void {
    this.searchDataService.sortResultByViews();
  }

  public tagsFilter(event: Event): void {
    const tag = (event.target as HTMLInputElement).value;
    this.searchDataService.changeSearchTag(tag);
  }
}
