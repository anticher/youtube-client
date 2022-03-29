import { Injectable } from '@angular/core';
import * as testData from './testResponceData.json';

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
    if (firstItemDate > lastItemDate) {
      this.resultData
        .sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt));
    } else if (firstItemDate < lastItemDate) {
      this.resultData
        .sort((a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt));
    } else {
      return;
    }
    this.dataChanged = Date.now();
  }

  public sortResultByViews() {
    if (this.resultData.length < 2) {
      return;
    }
    const lastIndex = this.resultData.length - 1;
    const firstItemViewCount = this.resultData[0].statistics.viewCount;
    const lastItemViewCount = this.resultData[lastIndex].statistics.viewCount;
    if (firstItemViewCount < lastItemViewCount) {
      this.resultData
        .sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
    } else if (firstItemViewCount > lastItemViewCount) {
      this.resultData
        .sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
    } else {
      return;
    }
    this.dataChanged = Date.now();
  }

  public changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
