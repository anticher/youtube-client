import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import * as testData from './testResponceData.json';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  data = testData;

  resultData: SearchItem[] = [];

  dataChanged = 0;

  filterString = '';

  getResultData(): SearchItem[] {
    return this.resultData;
  }

  deleteResultData() {
    this.resultData = [];
  }

  getDataById(id: string): SearchItem {
    this.searchData('');
    const index = this.data.items.findIndex((item) => item.id === id);
    return this.data.items[index];
  }

  searchData(searchString: string) {
    this.resultData = this.data.items.filter((item) => item.snippet.channelTitle
      .toLowerCase()
      .startsWith(searchString.toLowerCase()));
    this.dataChanged = Date.now();
  }

  sortResultByDate() {
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

  sortResultByViews() {
    if (this.resultData.length < 2) {
      return;
    }
    const lastIndex = this.resultData.length - 1;
    const firstItemViewCount = this.resultData[0].statistics.viewCount;
    const lastItemViewCount = this.resultData[lastIndex].statistics.viewCount;
    if (firstItemViewCount < lastItemViewCount) {
      this.resultData
        .sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else if (firstItemViewCount > lastItemViewCount) {
      this.resultData
        .sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    } else {
      return;
    }
    this.dataChanged = Date.now();
  }

  changeSearchTag(tag: string) {
    this.filterString = tag;
  }
}
