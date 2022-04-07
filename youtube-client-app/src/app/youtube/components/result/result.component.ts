import { Component, OnInit } from '@angular/core';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public items: DetailsItem[] = [];

  private dataChanged: number = 0;

  public filterString: string = '';

  constructor(private searchDataService: SearchDataService) { }

  public ngOnInit(): void {
    this.searchDataService.searchDataSubject.subscribe(
      (val) => this.items = val,
      (err) => console.log({ 'err': err }),
      () => {this.items = []}
      )
    // this.dataChanged = this.searchDataService.getDataChanged();
    // this.items = this.searchDataService.getData();
  }

  // public ngDoCheck(): void {
  //   if (this.filterString !== this.searchDataService.getFilterString()) {
  //     this.filterString = this.searchDataService.getFilterString();
  //   }
  //   if (this.dataChanged !== this.searchDataService.getDataChanged()) {
  //     this.dataChanged = this.searchDataService.getDataChanged();
  //     this.items = this.searchDataService.getData();
  //   }
  // }
}
