import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnDestroy {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  private searchString$: Subject<string> = new Subject<string>();

  public searchInputValue: string = '';

  public isSearchInputAndButtonDisabled: boolean = false;

  private isUserAuthsubscription!: Subscription;

  private searchSubjectsubscription!: Subscription;

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.searchSubjectsubscription = this.searchString$
      .pipe(debounceTime(1000)).subscribe((value) => {
        this.searchDataService.searchData(value);
      });
    this.isUserAuthsubscription = this.authService.isUserAuth$.subscribe((value) => {
      if (!value) {
        this.searchInputValue = '';
        this.isSearchInputAndButtonDisabled = true;
      } else {
        this.isSearchInputAndButtonDisabled = false;
      }
    });
  }

  public makeSearch(): void {
    this.searchDataService.searchData(this.searchInputValue);
  }

  public toggleSettings(): void {
    this.toggleDisplay.emit();
  }

  public inputChange(event: Event): void {
    const seachString = (event.target as HTMLInputElement).value;
    this.searchString$.next(seachString);
  }

  public ngOnDestroy(): void {
    this.isUserAuthsubscription.unsubscribe();
    this.searchSubjectsubscription.unsubscribe();
  }
}
