import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  searchSubject = new BehaviorSubject<string>('');

  public value: string = '';

  public disabled: boolean = false;

  constructor(
    private searchDataService: SearchDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(1000)).subscribe((value) => {
      this.searchDataService.searchData(value);
    });
    this.authService.isUserAuth$.subscribe((value) => {
      if (!value) {
        this.value = '';
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
    this.searchSubject.next(seachString);
  }
}
