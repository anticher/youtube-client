import { Injectable } from '@angular/core';
import * as testData from './testResponceData.json';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  data = testData;

  resultData: any[] = [];

  dataChanged = 0;

  dataSavedForFilter: any[] = [];

  filterString = '';

  getData(): any {
    return this.resultData;
  }

  searchData(searchString: string) {
    this.resultData = this.data.items.filter((item) => item.snippet.channelTitle
      .toLowerCase()
      .startsWith(searchString.toLowerCase()));
    this.dataSavedForFilter = [...this.resultData];
    if (this.filterString) {
      this.filterResultByTag(this.filterString);
    }
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
      this.resultData.sort((a, b) => {
        return +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt)
      });
    } else if (firstItemDate < lastItemDate) {
      this.resultData.sort((a, b) => {
        return +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt)
      });
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
    if (this.resultData[0].statistics.viewCount < this.resultData[lastIndex].statistics.viewCount) {
      this.resultData.sort((a, b) => {
        return a.statistics.viewCount - b.statistics.viewCount
      });
    } else if (this.resultData[0].statistics.viewCount > this.resultData[lastIndex].statistics.viewCount) {
      this.resultData.sort((a, b) => {
        return b.statistics.viewCount - a.statistics.viewCount
      });
    } else {
      return;
    }
    this.dataChanged = Date.now();
  }

  filterResultByTag(filterString: string) {
    if (!filterString) {
      this.resultData = this.dataSavedForFilter;
    } else {
      this.filterString = filterString;
      this.resultData = this.dataSavedForFilter.filter((item) => item.snippet.tags.includes(filterString));
    }
    this.dataChanged = Date.now();
  }
}
