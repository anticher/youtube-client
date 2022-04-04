import {
  Component, DoCheck, EventEmitter, Input, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, map } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, DoCheck {
  @Input() toggleSettings: any = new EventEmitter();

  value = '';

  isSearchSettingsButtonHidden = false;

  searchSubject = new BehaviorSubject<string>('')

  constructor(
    private searchDataService: SearchDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.searchSubject.pipe(debounceTime(1000)).subscribe((val) => {
      this.searchDataService.searchData(val);
    })
  }

  ngDoCheck(): void {
    if (this.router.url.startsWith('/result/')) {
      this.isSearchSettingsButtonHidden = true;
      this.toggleSettings(true);
    } else {
      this.isSearchSettingsButtonHidden = false;
    }
  }

  inputChange(event: Event) {
    const seachString = (event.target as HTMLInputElement).value;
    this.searchSubject.next(seachString)
  }

}
