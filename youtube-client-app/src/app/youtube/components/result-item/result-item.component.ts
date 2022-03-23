import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item: SearchItem | undefined;

  itemId = ''

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

  borderColor = '';

  constructor(
    private resultService: ResultService,
  ) { }

  ngOnInit(): void {
    if (this.item) {
      this.itemId = this.item.id
      this.statistics = this.item.statistics;
      this.channelTitle = this.item.snippet.channelTitle;
      this.categoryId = this.item.snippet.categoryId;
      this.mediumImageUrl = this.item.snippet.thumbnails.medium.url;
      this.borderColor = this.resultService.setCorrectBorderColor(this.item.snippet.publishedAt)
    }
  }
}
