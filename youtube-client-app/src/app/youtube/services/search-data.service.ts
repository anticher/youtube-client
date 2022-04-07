import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  // key = 'AIzaSyBPdJUu1x58aVSiKN-mMypDuwZDnvhzAxQ';

  // searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet`;

  // detailsUrlStart = `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&id=`

  // searchUrl = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet`;

  // searchUrl = `https://www.googleapis.com/youtube/v3/search?type=video`;

  // detailsUrlStart = `https://www.googleapis.com/youtube/v3/videos?id=`

  searchUrl: string = 'search?type=video';

  detailsUrlStart: string = 'videos?id=';

  // detailsUrlEnd = '&part=snippet,statistics'

  detailsUrlEnd: string = '&part=statistics';

  data: DetailsItem[] = [];

  items: DetailsItem[] = [];

  searchDataSubject = new BehaviorSubject<DetailsItem[]>([]);

  filterStringSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public clearSearchDataSubject(): void {
    this.searchDataSubject.next([]);
  }

  public searchData(searchString: string): void {
    if (searchString.length < 3) {
      this.searchDataSubject.next([]);
      return;
    }
    // console.log('startSearching')
    const itemsCount = 21;
    const counter = itemsCount;
    this.http.get<SearchResponse>(`${this.searchUrl}&maxResults=${counter}&q=${searchString}`).pipe(map((response) => {
      const idArray: string[] = [];
      response.items.forEach((item) => {
        idArray.push(item.id.videoId);
      });
      const itemsWithStats: DetailsItem[] = [];
      idArray.forEach((id) => {
        this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd).subscribe({
          next: (res) => { itemsWithStats.push(res.items[0]); },
          error: (err) => console.log({ err }),
        });
      });
      return itemsWithStats;
    })).subscribe({
      next: (res) => { this.searchDataSubject.next(res); },
      error: (err) => console.log({ err }),

    });
  }

  public getDataById(id: string): Observable<DetailsResponse> {
    const url = this.detailsUrlStart + id + this.detailsUrlEnd;
    return this.http.get<DetailsResponse>(url);
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
    this.searchDataSubject.next(items);
  }

  public changeSearchTag(tag: string): void {
    this.filterStringSubject.next(tag);
  }
}
