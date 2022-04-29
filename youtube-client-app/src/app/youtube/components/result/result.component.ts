import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy {
  public items: DetailsItem[] = [];

  public filterString: string = '';

  private subscriptions = new Subscription()

  constructor(private searchDataService: SearchDataService) { }

  public ngOnInit(): void {
    this.subscriptions.add(this.searchDataService.searchData$
      .subscribe((val) => { this.items = val; }));
    this.subscriptions.add(this.searchDataService.filterString$
      .subscribe((val) => { this.filterString = val; }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
