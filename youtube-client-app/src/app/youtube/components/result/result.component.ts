import {
  Component, DoCheck, OnDestroy, OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnDestroy {
  items: DetailsItem[] = [];

  dataChanged = 0;

  filterString = '';

  storeSubscription: Subscription

  constructor(private searchDataService: SearchDataService, private store: Store) {
    this.storeSubscription = this.store.select(state => state.items.apiItems).subscribe((val) => this.items = val)
  }

  ngOnDestroy(): void {
    console.log('unsub')
    this.storeSubscription.unsubscribe()
  }
}
