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

  private search$: Subject<string> = new Subject<string>();

  public value: string = '';

  public disabled: boolean = false;

  private isUserAuthsubscription!: Subscription;

  private searchSubjectsubscription!: Subscription;

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.searchSubjectsubscription = this.search$.pipe(debounceTime(1000)).subscribe((value) => {
      this.searchDataService.searchData(value);
    });
    this.isUserAuthsubscription = this.authService.isUserAuth$.subscribe((value) => {
      if (!value) {
        this.value = '';
        console.log(this.value)
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    });
  }

  public makeSearch(): void {
    this.searchDataService.searchData(this.value);
  }

  public toggleSettings(): void {
    this.toggleDisplay.emit();
  }

  public inputChange(event: Event): void {
    const seachString = (event.target as HTMLInputElement).value;
    this.search$.next(seachString);
  }

  public ngOnDestroy(): void {
    this.isUserAuthsubscription.unsubscribe()
    this.searchSubjectsubscription.unsubscribe()
  }
}
