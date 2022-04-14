import {
  Component, Input, OnInit,
} from '@angular/core';
import { DetailsItem } from '../../models/details-item.model';
import { Statistics } from '../../models/statistics.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() set item(item: DetailsItem) {
    this.detailsItem = item;
    this.setItemInfo();
  }

  private detailsItem!: DetailsItem;

  public itemId: string = '';

  public statistics: Statistics = {
    commentCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  public channelTitle: string = '';

  public categoryId: string = '';

  public mediumImageUrl: string = '';

  public publishedDaysAgo: string = '';

  private setItemInfo(): void {
    this.itemId = this.detailsItem.id;
    this.statistics = this.detailsItem.statistics;
    this.channelTitle = this.detailsItem.snippet.channelTitle;
    this.categoryId = this.detailsItem.snippet.categoryId;
    this.mediumImageUrl = this.detailsItem.snippet.thumbnails.high.url;
    this.publishedDaysAgo = this.detailsItem.snippet.publishedAt;
  }
}
