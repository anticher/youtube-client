import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export class SearchSortingComponent {
  constructor(private searchDataService: SearchDataService) { }

  public dateSort() {
    this.searchDataService.sortResultByDate();
  }

  public viewsSort() {
    this.searchDataService.sortResultByViews();
  }

  public tagsFilter(event: Event) {
    const tag = (event.target as HTMLInputElement).value;
    this.searchDataService.changeSearchTag(tag);
  }
}
