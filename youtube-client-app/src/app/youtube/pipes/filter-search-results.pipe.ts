import { Pipe, PipeTransform } from '@angular/core';
import { DetailsItem } from '../models/details-item.model';

@Pipe({
  name: 'filterSearchResults',
})
export class FilterSearchResultsPipe implements PipeTransform {
  private resultData: DetailsItem[] = [];

  public transform(items: DetailsItem[], filterString: string): DetailsItem[] {
    if (filterString) {
      this.resultData = items.filter(
        (item) => item.snippet.tags && item.snippet.tags.includes(filterString),
      );
      return this.resultData;
    }
    return items;
  }
}
