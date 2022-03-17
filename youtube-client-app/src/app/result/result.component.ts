import { Component, OnInit } from '@angular/core';
import { searchItem } from '../models/search-item.model';
import { SearchDataService } from '../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  items: searchItem[] = []

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit(): void {
    console.log(this.searchDataService.getData().items)
    this.items = this.searchDataService.getData().items
  }

}
