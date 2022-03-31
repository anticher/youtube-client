import {
  Component, DoCheck, OnDestroy, OnInit,
} from '@angular/core';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, DoCheck, OnDestroy {
  items: DetailsItem[] = [];

  dataChanged = 0;

  filterString = '';

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit(): void {
    this.dataChanged = this.searchDataService.dataChanged;
    this.items = this.searchDataService.itemsWithStats;
  }

  ngDoCheck() {
    if (this.filterString !== this.searchDataService.filterString) {
      this.filterString = this.searchDataService.filterString;
    }
    if (this.dataChanged !== this.searchDataService.dataChanged) {
      this.dataChanged = this.searchDataService.dataChanged;
      this.items = this.searchDataService.itemsWithStats;
    }
  }

  ngOnDestroy() {
    this.searchDataService.deletItemsWithStats();
  }
}
