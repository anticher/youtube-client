import {
  Component, Input, OnInit,
} from '@angular/core';
import { SearchItem, Statistics } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() set item(item: SearchItem) {
    this.detailsItem = item;
  }

  private detailsItem!: SearchItem;

  public itemId: string = '';

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  public channelTitle: string = '';

  public categoryId: string = '';

  public mediumImageUrl: string = '';

  public publishedDaysAgo: string = '';

  public ngOnInit(): void {
    this.setItemInfo();
  }

  private setItemInfo(): void {
    this.itemId = this.detailsItem.id;
    this.statistics = this.detailsItem.statistics;
    this.channelTitle = this.detailsItem.snippet.channelTitle;
    this.categoryId = this.detailsItem.snippet.categoryId;
    this.mediumImageUrl = this.detailsItem.snippet.thumbnails.medium.url;
    this.publishedDaysAgo = this.detailsItem.snippet.publishedAt;
  }
}
