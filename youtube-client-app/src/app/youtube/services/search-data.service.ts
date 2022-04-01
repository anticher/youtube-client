import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import * as testData from './test-response-data.json';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private data: SearchResponse = testData;

  private resultData: SearchItem[] = [];

  private dataChanged: number = 0;

  private filterString: string = '';

  public getData(): SearchItem[] {
    return this.resultData;
  }

  public getDataChanged(): number {
    return this.dataChanged;
  }

  public deleteResultData(): void {
    this.resultData = [];
    this.dataChanged = Date.now();
  }

  public getFilterString(): string {
    return this.filterString;
  }

  public searchData(searchString: string) {
    this.resultData = this.data.items.filter((item) => item.snippet.channelTitle
      .toLowerCase()
      .startsWith(searchString.toLowerCase()));
    this.dataChanged = Date.now();
  }

  public getDataById(id: string): SearchItem {
    this.searchData('');
    const index = this.data.items.findIndex((item) => item.id === id);
    return this.data.items[index];
  }

  public sortResultByDate(): void {
    if (this.resultData.length < 2) {
      return;
    }
    const lastIndex = this.resultData.length - 1;
    const firstItemDate = +new Date(this.resultData[0].snippet.publishedAt);
    const lastItemDate = +new Date(this.resultData[lastIndex].snippet.publishedAt);
    const order = firstItemDate > lastItemDate ? 1 : -1;
    this.resultData.sort(
      (a, b) => order * +new Date(a.snippet.publishedAt) - order * +new Date(b.snippet.publishedAt),
    );
    this.dataChanged = Date.now();
  }

  public sortResultByViews(): void {
    if (this.resultData.length < 2) {
      return;
    }
    const lastIndex = this.resultData.length - 1;
    const firstItemViewCount = this.resultData[0].statistics.viewCount;
    const lastItemViewCount = this.resultData[lastIndex].statistics.viewCount;
    const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
    this.resultData.sort(
      (a, b) => order * +a.statistics.viewCount - order * +b.statistics.viewCount,
    );
    this.dataChanged = Date.now();
  }

  public changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
