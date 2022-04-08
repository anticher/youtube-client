import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export class SearchSortingComponent implements OnInit {
  public value: string = '';

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.authService.loginSubject.subscribe((value) => {
      if (!value) {
        this.value = '';
        this.searchDataService.changeSearchTag('');
      }
    });
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
}
