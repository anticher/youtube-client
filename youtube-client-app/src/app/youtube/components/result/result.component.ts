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

  public filterString: string = '';

  constructor(private searchDataService: SearchDataService) { }

  public ngOnInit(): void {
    this.searchDataService.searchDataSubject.subscribe({
      next: (val) => { this.items = val; },
      error: (err) => console.log({ err }),
      complete: () => { this.items = []; },
    });
    this.searchDataService.filterStringSubject.subscribe({
      next: (val) => { this.filterString = val; },
      error: (err) => console.log({ err }),
      complete: () => { this.filterString = ''; },
    });
  }
}
