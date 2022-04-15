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

  private searchDataSubscription!: Subscription;

  private filteringStringSubscription!: Subscription

  constructor(private searchDataService: SearchDataService) { }

  public ngOnInit(): void {
    this.searchDataSubscription = this.searchDataService.searchData$.subscribe({
      next: (val) => { this.items = val; },
      error: (err) => console.log({ err }),
      complete: () => { this.items = []; },
    });
    this.filteringStringSubscription = this.searchDataService.filterString$.subscribe({
      next: (val) => { this.filterString = val; },
      error: (err) => console.log({ err }),
      complete: () => { this.filterString = ''; },
    });
  }

  public ngOnDestroy(): void {
    this.searchDataSubscription.unsubscribe()
    this.filteringStringSubscription.unsubscribe()
  }
}
