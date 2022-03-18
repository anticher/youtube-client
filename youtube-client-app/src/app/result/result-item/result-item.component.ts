import { Component, Input, OnInit } from '@angular/core';
import { searchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() item: searchItem | undefined
  statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  }
  channelTitle = ''
  categoryId = ''
  mediumImageUrl = ''
  publishedDaysAgo = 0
  borderColor = {
    yellow: false,
    blue: false,
    red: false,
    green: false,
  }
  constructor() { }

  ngOnInit(): void {
    if (this.item) {
      this.statistics = this.item.statistics
      this.channelTitle = this.item.snippet.channelTitle
      this.categoryId = this.item.snippet.categoryId
      this.mediumImageUrl = this.item.snippet.thumbnails.medium.url
      this.publishedDaysAgo = this.getDateRelevanceInMinutes(this.item.snippet.publishedAt)
      this.setCorrectBorderColor()
    }
  }

  getDateRelevanceInMinutes(publishedDate: string): number {
    const milliseconds = Date.now() - new Date(publishedDate).getTime()
    const millisecondsToDays = milliseconds / (1000*60*60*24)
    return millisecondsToDays
  }

  setCorrectBorderColor() {
    switch (true) {
      case this.publishedDaysAgo > 180:
        this.borderColor.red = true
        break
      case this.publishedDaysAgo < 7:
        this.borderColor.blue = true
        break
      case this.publishedDaysAgo < 30:
        this.borderColor.green = true
        break
      default:
      this.borderColor.yellow = true
    }
  }

}
