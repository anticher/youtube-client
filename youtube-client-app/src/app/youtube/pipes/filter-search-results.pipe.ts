import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterSearchResults',
})
export class FilterSearchResultsPipe implements PipeTransform {
  resultData: SearchItem[] = [];

  transform(items: SearchItem[], filterString:string): SearchItem[] {
    if (filterString) {
      this.resultData = items.filter((item) => item.snippet.tags.includes(filterString));
      return this.resultData;
    }
    return items;
  }
}
