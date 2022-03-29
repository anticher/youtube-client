import { Component, DoCheck, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, DoCheck {
  items: SearchItem[] = [];

  private dataChanged: number = 0;

  public filterString: string = '';

  constructor(private searchDataService: SearchDataService) { }

  public ngOnInit(): void {
    this.dataChanged = this.searchDataService.getDataChanged();
    this.items = this.searchDataService.getData();
  }

  public ngDoCheck(): void {
    if (this.filterString !== this.searchDataService.getFilterString()) {
      this.filterString = this.searchDataService.getFilterString();
    }
    if (this.dataChanged !== this.searchDataService.getDataChanged()) {
      this.dataChanged = this.searchDataService.getDataChanged();
      this.items = this.searchDataService.getData();
    }
  }
}
