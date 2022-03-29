import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  value = '';

  constructor(private searchDataService: SearchDataService) { }

  makeSearch() {
    this.searchDataService.searchData(this.value);
  }
  
}
