import { Component, EventEmitter, Input } from '@angular/core';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() toggleSettings: any = new EventEmitter();

  value = '';

  constructor(private searchDataService: SearchDataService) { }

  makeSearch() {
    this.searchDataService.searchData(this.value);
  }
}
