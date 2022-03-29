import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  key = 'AIzaSyBPdJUu1x58aVSiKN-mMypDuwZDnvhzAxQ';

  searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet`;

  detailsUrlStart = `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&id=`

  detailsUrlEnd = '&part=snippet,statistics'

  data: DetailsItem[] = [];

  dataChanged = 0;

  filterString = '';

  itemsWithStats: any = []

  constructor(private http: HttpClient) { }

  deletItemsWithStats() {
    this.itemsWithStats = [];
  }

  getDataById(id: string): any {
    return this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd)
  }

  searchData(searchString: string) {
    const itemsCount = 20
    let counter = itemsCount
    this.itemsWithStats = []
    this.http.get<SearchResponse>(this.searchUrl + `&maxResults=${counter}&q=${searchString}`).pipe(map((response) => {
      const resultItemsArray: any[] = []
      while (resultItemsArray.length < itemsCount && response.items.length > 0) {
        response.items.forEach((item) => {
          this.http.get<DetailsResponse>(this.detailsUrlStart + item.id.videoId + this.detailsUrlEnd).subscribe(
            (val) => {
              const item = val.items[0]
              if (!this.filterString && !resultItemsArray.includes(item)) {
                resultItemsArray.push(item)
              } else if (this.filterString && item.snippet.tags.includes(this.filterString) && !resultItemsArray.includes(item)) {
                resultItemsArray.push(item)
              }
            }
          )
        })
        counter++
      }
      console.log(resultItemsArray)
      return resultItemsArray
    })).subscribe({
      next: (res) => this.itemsWithStats = res,
      error: (err) => console.log({ 'err': err }),
      complete: () => this.dataChanged = Date.now()
    })
  }

  sortResultByDate() {
    if (this.itemsWithStats.length < 2) {
      return;
    }
    const lastIndex = this.itemsWithStats.length - 1;
    const firstItemDate = +new Date(this.itemsWithStats[0].snippet.publishedAt);
    const lastItemDate = +new Date(this.itemsWithStats[lastIndex].snippet.publishedAt);
    if (firstItemDate > lastItemDate) {
      this.itemsWithStats
        .sort((a: DetailsItem, b: DetailsItem) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt));
    } else if (firstItemDate < lastItemDate) {
      this.itemsWithStats
        .sort((a: DetailsItem, b: DetailsItem) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt));
    } else {
      return;
    }
    this.dataChanged = Date.now();
  }

  sortResultByViews() {
    if (this.itemsWithStats.length < 2) {
      return;
    }
    const lastIndex = this.itemsWithStats.length - 1;
    const firstItemViewCount = this.itemsWithStats[0].statistics.viewCount;
    const lastItemViewCount = this.itemsWithStats[lastIndex].statistics.viewCount;
    if (firstItemViewCount < lastItemViewCount) {
      this.itemsWithStats
        .sort((a: DetailsItem, b: DetailsItem) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else if (firstItemViewCount > lastItemViewCount) {
      this.itemsWithStats
        .sort((a: DetailsItem, b: DetailsItem) => +b.statistics.viewCount - +a.statistics.viewCount);
    } else {
      return;
    }
    this.dataChanged = Date.now();
    return
  }

  changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
