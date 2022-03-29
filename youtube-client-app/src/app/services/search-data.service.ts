import { Injectable } from '@angular/core';
import * as testData from './test-response-data.json';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private data = testData;

  private resultData: any[] = [];

  private dataChanged: number = 0;

  private filterString: string = '';

  public getData(): any[] {
    return this.resultData;
  }

  public getDataChanged(): number {
    return this.dataChanged;
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

  public sortResultByDate() {
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

  public sortResultByViews() {
    if (this.resultData.length < 2) {
      return;
    }
    const lastIndex = this.resultData.length - 1;
    const firstItemViewCount = this.resultData[0].statistics.viewCount;
    const lastItemViewCount = this.resultData[lastIndex].statistics.viewCount;
    const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
    this.resultData.sort((a, b) => order * a.statistics.viewCount - order * b.statistics.viewCount);
    this.dataChanged = Date.now();
  }

  public changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
