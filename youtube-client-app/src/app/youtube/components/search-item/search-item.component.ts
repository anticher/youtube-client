import {
  Component, EventEmitter, Output,
} from '@angular/core';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  public value: string = '';

  constructor(private searchDataService: SearchDataService) { }

  public makeSearch(): void {
    this.searchDataService.searchData(this.value);
  }
}
