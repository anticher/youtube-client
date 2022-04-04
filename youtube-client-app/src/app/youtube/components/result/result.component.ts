import {
  Component, DoCheck, OnDestroy, OnInit,
} from '@angular/core';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  items: DetailsItem[] = [];

  dataChanged = 0;

  filterString = '';

  constructor(private searchDataService: SearchDataService) { }

  ngOnInit(): void {
    this.searchDataService.searchDataSubject.subscribe((val) => this.items = val)
  }
}
