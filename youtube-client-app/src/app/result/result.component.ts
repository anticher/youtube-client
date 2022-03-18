import { Component, DoCheck, OnInit } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchDataService } from '../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, DoCheck {
  items: SearchItem[] = [];

  dataChanged = 0;

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit(): void {
    this.dataChanged = this.searchDataService.dataChanged;
    this.items = this.searchDataService.resultData;
  }

  ngDoCheck() {
    if (this.dataChanged !== this.searchDataService.dataChanged) {
      this.dataChanged = this.searchDataService.dataChanged;
      this.items = this.searchDataService.resultData;
    }
  }
}
