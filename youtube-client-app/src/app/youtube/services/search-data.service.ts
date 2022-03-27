import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DetailsItem } from '../models/details-item.model';
import { DetailsResponse } from '../models/details-response.model';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  key = 'AIzaSyAIvwFegbALuVc8kJbT7a7BrxZgQo-ThEI';

  searchUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAIvwFegbALuVc8kJbT7a7BrxZgQo-ThEI&type=video&part=snippet&maxResults=20&q=europe';

  detailsUrlStart = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAIvwFegbALuVc8kJbT7a7BrxZgQo-ThEI&id='

  detailsUrlEnd = '&part=snippet,statistics'

  data: SearchItem[] = [];

  resultData: SearchItem[] = [];

  dataChanged = 0;

  filterString = '';

  itemsIdList: any = []

  itemsWithStats: any = []

  constructor(private http: HttpClient) {
    this.http.get<SearchResponse>(this.searchUrl).subscribe(res => this.data = res.items)
  }

  fetchData() {
    
    console.log(this.data)
  }

  getResultData(): SearchItem[] {
    return this.resultData;
  }

  deleteResultData() {
    this.resultData = [];
  }

  getDataById(id: string): any {
    return this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd)
  }

  searchData(searchString: string) {
    this.itemsIdList = []
    this.itemsWithStats = []
    this.http.get<SearchResponse>(this.searchUrl).subscribe(
      (res) => res.items.forEach((item) => this.itemsIdList.push(item.id.videoId)),
      (err) => console.log({'err': err}),
      () => this.createSearchedItemsWithStats()
    )
  }

  createSearchedItemsWithStats() {
    // console.log(this.itemsIdList)
    this.itemsIdList.forEach((id: string) => {
      this.http.get<DetailsResponse>(this.detailsUrlStart + id + this.detailsUrlEnd).subscribe(
        (res) => this.itemsWithStats.push(res.items[0]),
        (err) => console.log({'err': err}),
        () => this.dataChanged = Date.now()
      )
    })
    
  }

  sortResultByDate() {
    // if (this.resultData.length < 2) {
    //   return;
    // }
    // const lastIndex = this.resultData.length - 1;
    // const firstItemDate = +new Date(this.resultData[0].snippet.publishedAt);
    // const lastItemDate = +new Date(this.resultData[lastIndex].snippet.publishedAt);
    // if (firstItemDate > lastItemDate) {
    //   this.resultData
    //     .sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt));
    // } else if (firstItemDate < lastItemDate) {
    //   this.resultData
    //     .sort((a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt));
    // } else {
    //   return;
    // }
    // this.dataChanged = Date.now();
  }

  sortResultByViews() {
    // if (this.resultData.length < 2) {
    //   return;
    // }
    // const lastIndex = this.resultData.length - 1;
    // const firstItemViewCount = this.resultData[0].statistics.viewCount;
    // const lastItemViewCount = this.resultData[lastIndex].statistics.viewCount;
    // if (firstItemViewCount < lastItemViewCount) {
    //   this.resultData
    //     .sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    // } else if (firstItemViewCount > lastItemViewCount) {
    //   this.resultData
    //     .sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    // } else {
    //   return;
    // }
    // this.dataChanged = Date.now();
    return
  }

  changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
