import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item: SearchItem | undefined;

  statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  channelTitle = '';

  categoryId = '';

  mediumImageUrl = '';

  publishedDaysAgo = 0;

  borderColor = '';

  ngOnInit(): void {
    if (this.item) {
      this.statistics = this.item.statistics;
      this.channelTitle = this.item.snippet.channelTitle;
      this.categoryId = this.item.snippet.categoryId;
      this.mediumImageUrl = this.item.snippet.thumbnails.medium.url;
      this.setPublishedDaysAgoInMinutes(this.item.snippet.publishedAt);
      this.setCorrectBorderColor();
    }
  }

  setPublishedDaysAgoInMinutes(publishedDate: string) {
    const milliseconds = Date.now() - new Date(publishedDate).getTime();
    const millisecondsToDays = milliseconds / (1000 * 60 * 60 * 24);
    this.publishedDaysAgo = millisecondsToDays;
  }

  setCorrectBorderColor() {
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
