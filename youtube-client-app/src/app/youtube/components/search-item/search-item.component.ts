import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnDestroy {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  public searchInputValue: string = '';

  public isSearchInputAndButtonDisabled: boolean = false;

  private isUserAuthSubscription!: Subscription;

  private searchSubjectSubscription!: Subscription;

  private SearchInputValueSubscription!: Subscription;

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.searchSubjectSubscription = this.searchDataService.searchString$
      .pipe(debounceTime(1000)).subscribe((value) => {
        this.searchDataService.searchData(value);
      });
    this.isUserAuthSubscription = this.authService.isUserAuth$.subscribe((value) => {
      if (!value) {
        this.searchInputValue = '';
        this.isSearchInputAndButtonDisabled = true;
      } else {
        this.isSearchInputAndButtonDisabled = false;
      }
    });
    this.SearchInputValueSubscription = this.searchDataService.searchString$.subscribe((value) => {
      if (!value) {
        this.searchInputValue = '';
      }
    });
  }

  public toggleSettings(): void {
    this.toggleDisplay.emit();
  }

  public inputChange(event: Event): void {
    const seachString = (event.target as HTMLInputElement).value;
    this.searchDataService.searchString$.next(seachString);
  }

  public ngOnDestroy(): void {
    this.isUserAuthSubscription.unsubscribe();
    this.searchSubjectSubscription.unsubscribe();
    this.SearchInputValueSubscription.unsubscribe();
  }
}
