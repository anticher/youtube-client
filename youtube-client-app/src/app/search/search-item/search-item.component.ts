import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() toggleSettings: any = new EventEmitter()
  value = ''
  constructor(private searchDataService: SearchDataService) { }

  ngOnInit(): void {

  }

  makeSearch() {
    this.searchDataService.searchData(this.value)
  }

}
