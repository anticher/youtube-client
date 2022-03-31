import { Pipe, PipeTransform } from '@angular/core';
import { DetailsItem } from '../models/details-item.model';

@Pipe({
  name: 'filterSearchResults',
})
export class FilterSearchResultsPipe implements PipeTransform {
  resultData: DetailsItem[] = [];

  transform(items: DetailsItem[], filterString: string): DetailsItem[] {
    if (filterString) {
      console.log(items[0].snippet.tags)
      console.log(this.resultData)

      this.resultData = items.filter((item) => {
        if (item.snippet.tags) {
          if (item.snippet.tags.includes(filterString)) {
            return true
          }
        }
        return false
      })
      return this.resultData;
    }
    return items;
  }
}
