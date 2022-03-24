import {
  Component, DoCheck, EventEmitter, Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements DoCheck {
  @Input() toggleSettings: any = new EventEmitter();

  value = '';

  isSearchSettingsButtonHidden = false;

  constructor(
    private searchDataService: SearchDataService,
    private router: Router,
  ) { }

  makeSearch() {
    this.searchDataService.searchData(this.value);
  }

  ngDoCheck(): void {
    if (this.router.url.startsWith('/result/')) {
      this.isSearchSettingsButtonHidden = true;
      this.toggleSettings(true);
    } else {
      this.isSearchSettingsButtonHidden = false;
    }
  }
}
