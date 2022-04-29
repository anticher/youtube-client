import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export class SearchSortingComponent implements OnInit, OnDestroy {
  public sortingByTagValue: string = '';

  private subscriptions = new Subscription();

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    if (!this.authService.isUserAuth$.value) {
      this.sortingByTagValue = '';
      this.searchDataService.changeSearchTag('');
    }
    this.subscriptions.add(this.searchDataService.searchData$.subscribe((value) => {
      if (value.length === 0) {
        this.sortingByTagValue = '';
        this.searchDataService.changeSearchTag('');
      }
    }));
  }

  public dateSort(): void {
    this.searchDataService.sortResultByDate();
  }

  public viewsSort(): void {
    this.searchDataService.sortResultByViews();
  }

  public tagsFilter(event: Event): void {
    const tag = (event.target as HTMLInputElement).value;
    this.searchDataService.changeSearchTag(tag);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
