import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';

const itemsCount = 21;

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private searchUrl: string = 'search?type=video';

  private detailsUrlStart: string = 'videos?id=';

  private detailsUrlEnd: string = '&part=statistics';

  public searchDataSubject = new BehaviorSubject<DetailsItem[]>([]);

  public filterStringSubject = new BehaviorSubject<string>('');

  constructor(
    private httpService: HttpService
    ) { }

  public clearSearchDataSubject(): void {
    this.searchDataSubject.next([]);
  }
  
  public searchData(searchString: string): void {
    if (searchString.length < 3) {
      this.searchDataSubject.next([]);
      return;
    }
    const counter = itemsCount;
    this.httpService.getYoutubeIds(`${this.searchUrl}&maxResults=${counter}&q=${searchString}`).pipe(map((response) => {
      const idArray: string[] = [];
      response.items.forEach((item) => {
        idArray.push(item.id.videoId);
      });
      const itemsWithStats: DetailsItem[] = [];
      this.httpService.getYoutubeItems(this.detailsUrlStart + idArray.join(',') + this.detailsUrlEnd).subscribe({
        next: (res) => {
          res.items.forEach((item) => itemsWithStats.push(item));
        },
        error: (err) => console.log({ err }),
      });
      return itemsWithStats;
    })).subscribe({
      next: (res) => { this.searchDataSubject.next(res); },
      error: (err) => console.log({ err }),

    });
  }

  public getDataById(id: string): Observable<DetailsResponse> {
    const url = this.detailsUrlStart + id + this.detailsUrlEnd;
    return this.httpService.getYoutubeItems(url);
  }

  public sortResultByDate(): void {
    let items: DetailsItem[] = [];
    this.searchDataSubject.subscribe((value) => { items = value; });
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
    this.searchDataSubject.next(items);
  }

  public sortResultByViews(): void {
    let items: DetailsItem[] = [];
    this.searchDataSubject.subscribe((value) => { items = value; });
    if (items.length < 2) {
      return;
    }
    const lastIndex = items.length - 1;
    const firstItemViewCount = items[0].statistics.viewCount;
    const lastItemViewCount = items[lastIndex].statistics.viewCount;
    const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
    items.sort(
      (a, b) => order * +a.statistics.viewCount - order * +b.statistics.viewCount,
    );
    items.sort(
      (a, b) => order * +b.statistics.viewCount - order * +a.statistics.viewCount,
    );
    this.searchDataSubject.next(items);
  }

  public changeSearchTag(tag: string): void {
    this.filterStringSubject.next(tag);
  }
}
