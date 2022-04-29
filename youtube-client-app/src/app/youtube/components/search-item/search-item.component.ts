import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public isSearchButtonDisabled: boolean = false;

  public isSearchInputDisabled: boolean = false;

  private subscriptions = new Subscription();

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.searchDataService.searchString$
      .pipe(debounceTime(1000)).subscribe((value) => {
        this.searchDataService.searchData(value);
      }));
    this.subscriptions.add(this.authService.isUserAuth$.subscribe((value) => {
      if (!value) {
        this.searchInputValue = '';
        this.isSearchButtonDisabled = true;
        this.isSearchInputDisabled = true;
      } else {
        this.isSearchButtonDisabled = false;
        this.isSearchInputDisabled = false;
      }
    }));
    this.subscriptions.add(this.searchDataService.searchString$.subscribe((value) => {
      if (!value) {
        this.searchInputValue = '';
      }
    }));
  }

  public toggleSettings(): void {
    this.toggleDisplay.emit();
  }

  public inputChange(event: Event): void {
    if (this.router.url !== '/') {
      this.router.navigate(['']);
    }
    const seachString = (event.target as HTMLInputElement).value;
    this.searchDataService.searchString$.next(seachString);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
