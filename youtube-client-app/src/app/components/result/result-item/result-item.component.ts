import { Component, Input, OnInit } from '@angular/core';
import { SearchItem, Statistics } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item: SearchItem | undefined;

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  public channelTitle:string = '';

  public categoryId:string = '';

  public mediumImageUrl:string = '';

  private publishedDaysAgo:number = 0;

  public borderColor:string = '';

  public ngOnInit(): void {
    if (this.item) {
      this.statistics = this.item.statistics;
      this.channelTitle = this.item.snippet.channelTitle;
      this.categoryId = this.item.snippet.categoryId;
      this.mediumImageUrl = this.item.snippet.thumbnails.medium.url;
      this.setPublishedDaysAgoInMinutes(this.item.snippet.publishedAt);
      this.setCorrectBorderColor();
    }
  }

  private setPublishedDaysAgoInMinutes(publishedDate: string) {
    const milliseconds = Date.now() - new Date(publishedDate).getTime();
    const millisecondsToDays = milliseconds / (1000 * 60 * 60 * 24);
    this.publishedDaysAgo = millisecondsToDays;
  }

  private setCorrectBorderColor() {
    switch (true) {
      case this.publishedDaysAgo > 180:
        this.borderColor = 'red';
        break;
      case this.publishedDaysAgo < 7:
        this.borderColor = 'blue';
        break;
      case this.publishedDaysAgo < 30:
        this.borderColor = 'green';
        break;
      default:
        this.borderColor = 'yellow';
    }
  }
}
