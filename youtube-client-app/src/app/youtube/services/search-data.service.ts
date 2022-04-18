import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  BehaviorSubject, mergeMap, Observable, Subscription,
} from 'rxjs';
import { AddApiItems, ClearApiItems } from 'src/app/redux/youtube-items-state';
import { HttpService } from 'src/app/services/http.service';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';

const itemsCount = 20;

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private searchUrl: string = 'search?type=video';

  private detailsUrlStart: string = 'videos?id=';

  private detailsUrlEnd: string = '&part=statistics';

  public searchData$: BehaviorSubject<DetailsItem[]> = new BehaviorSubject<DetailsItem[]>([]);

  public filterString$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private storeSubscription: Subscription;

  constructor(
    private httpService: HttpService,
    private store: Store,
  ) {
    this.storeSubscription = this.store.select(state => state.items.apiItems).subscribe((val) => this.searchData$.next(val))
  }

  public clearSearchDataSubject(): void {
    this.searchData$.next([]);
  }

  public searchData(searchString: string): void {
    this.store.dispatch(new ClearApiItems())
    if (searchString.length < 3) {
      this.searchData$.next([]);
      return;
    }
    const counter = itemsCount;
    this.httpService.getYoutubeIds(`${this.searchUrl}&maxResults=${counter}&q=${searchString}`)
      .pipe(
        mergeMap((result) => {
          const idArray: string[] = [];
          result.items.forEach((item) => {
            idArray.push(item.id.videoId);
          });
          return this.httpService.getYoutubeItems(this.detailsUrlStart + idArray.join(',') + this.detailsUrlEnd);
        }),
      ).subscribe({
        // next: (result) => { this.searchData$.next(result.items); },
        next: (result) => { this.store.dispatch(new AddApiItems(result.items)); },
        error: (err) => console.log({ err }),
      });
  }

  public getDataById(id: string): Observable<DetailsResponse> {
    const url = this.detailsUrlStart + id + this.detailsUrlEnd;
    return this.httpService.getYoutubeItems(url);
  }

  public sortResultByDate(): void {
    const items: DetailsItem[] = [...this.searchData$.value];
    if (items.length < 2) {
      return;
    }
    const lastIndex = items.length - 1;
    const firstItemDate = +new Date(items[0].snippet.publishedAt);
    const lastItemDate = +new Date(items[lastIndex].snippet.publishedAt);
    const order = firstItemDate > lastItemDate ? 1 : -1;
    items.sort(
      (a, b) => order * +new Date(a.snippet.publishedAt) - order * +new Date(b.snippet.publishedAt),
    );
    this.searchData$.next(items);
  }

  public sortResultByViews(): void {
    const items: DetailsItem[] = [...this.searchData$.value];
    if (items.length < 2) {
      return;
    }
    const lastIndex = items.length - 1;
    const firstItemViewCount = +items[0].statistics.viewCount;
    const lastItemViewCount = +items[lastIndex].statistics.viewCount;
    const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
    items.sort(
      (a, b) => order * +b.statistics.viewCount - order * +a.statistics.viewCount,
    );
    this.searchData$.next(items);
  }

  public changeSearchTag(tag: string): void {
    this.filterString$.next(tag);
  }
}
