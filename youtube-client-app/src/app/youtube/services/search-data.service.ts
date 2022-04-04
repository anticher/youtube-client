import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  // key = 'AIzaSyBPdJUu1x58aVSiKN-mMypDuwZDnvhzAxQ';

  // searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet`;

  // detailsUrlStart = `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&id=`

  // searchUrl = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet`;

  searchUrl = `https://www.googleapis.com/youtube/v3/search?type=video`;

  detailsUrlStart = `https://www.googleapis.com/youtube/v3/videos?id=`

  // detailsUrlEnd = '&part=snippet,statistics'

  detailsUrlEnd = '&part=statistics'

  data: DetailsItem[] = [];

  // dataChanged = 0;

  items: DetailsItem[] = []

  filterString = '';

  // itemsWithStats: any = []

  searchDataSubject = new BehaviorSubject<DetailsItem[]>([])

  constructor(private http: HttpClient) { }

  // deletItemsWithStats() {
  //   this.itemsWithStats = [];
  // }

  getDataById(id: string): any {
    return this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd)
  }

  searchData(searchString: string) {
    if (searchString.length < 3) {
      console.log(searchString.length)
      // this.itemsWithStats = []
      this.searchDataSubject.next([])
      // this.dataChanged = Date.now()
      return
    }
    console.log('startSearching')
    const itemsCount = 21
    let counter = itemsCount
    // this.itemsWithStats = []
    this.http.get<SearchResponse>(this.searchUrl + `&maxResults=${counter}&q=${searchString}`).pipe(map((response) => {
      const idArray: string[] = []
      response.items.forEach((item) => {
        idArray.push(item.id.videoId)
      })
      const itemsWithStats: DetailsItem[] = []
      idArray.forEach((id) => {
        this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd).subscribe({
          next: (res) => itemsWithStats.push(res.items[0]),
          error: (err) => console.log({ 'err': err }),
          // complete: () => this.dataChanged = Date.now()
        })
      })
      return itemsWithStats
    })
    ).subscribe({
      next: (res) => {
        // this.itemsWithStats = res
        this.searchDataSubject.next(res)
      },
      error: (err) => console.log({ 'err': err }),
      // complete: () => this.dataChanged = Date.now()
    })
  }

  sortResultByDate() {
    let items: DetailsItem[] = []
    this.searchDataSubject.subscribe((val) => items = val)
    if (items.length < 2) {
      return;
    }
    const lastIndex = items.length - 1;
    const firstItemDate = +new Date(items[0].snippet.publishedAt);
    const lastItemDate = +new Date(items[lastIndex].snippet.publishedAt);
    if (firstItemDate > lastItemDate) {
      items
        .sort((a: DetailsItem, b: DetailsItem) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt));
    } else if (firstItemDate < lastItemDate) {
      items
        .sort((a: DetailsItem, b: DetailsItem) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt));
    } else {
      return;
    }
    this.searchDataSubject.next(items)
  }

  sortResultByViews() {
    console.log('click')
    this.searchDataSubject.subscribe((val) => this.items = val)
    if (this.items.length < 2) {
      return;
    }
    const lastIndex = this.items.length - 1;
    const firstItemViewCount = this.items[0].statistics.viewCount;
    const lastItemViewCount = this.items[lastIndex].statistics.viewCount;
    // console.log(firstItemViewCount)
    // console.log(lastItemViewCount)
    // this.items.forEach(element => console.log(element.statistics.viewCount))
    if (firstItemViewCount > lastItemViewCount) {
      this.items
        .sort((a: DetailsItem, b: DetailsItem) => {

           return (+a.statistics.viewCount - +b.statistics.viewCount)
          });
        console.log('first')
    } else if (firstItemViewCount < lastItemViewCount) {
      this.items
        .sort((a: DetailsItem, b: DetailsItem) => {

          return (+b.statistics.viewCount - +a.statistics.viewCount)
        });
        console.log('second')
    } else {
      return;
    }
    // console.log('clack')
    this.searchDataSubject.next(this.items)
    return
  }

  changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
