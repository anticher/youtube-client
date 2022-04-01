import { Component, Input, OnInit } from '@angular/core';
import { SearchItem, Statistics } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item!: SearchItem;

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
    if (this.item) {
      this.itemId = this.item.id;
      this.statistics = this.item.statistics;
      this.channelTitle = this.item.snippet.channelTitle;
      this.categoryId = this.item.snippet.categoryId;
      this.mediumImageUrl = this.item.snippet.thumbnails.medium.url;
      this.publishedDaysAgo = this.item.snippet.publishedAt;
    }
  }
}
