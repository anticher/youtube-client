import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../../services/result.service';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  bgColor = 'black';

  imageUrl = '';

  header = '';

  date = '';

  text = '';

  statistics = {
    commentCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
  ) { }

  ngOnInit() {
    this.setItemInfo();
  }

  setItemInfo() {
    const index = this.router.url.lastIndexOf('/') + 1;
    const id = this.router.url.substring(index);
    this.searchDataService.getDataById(id).subscribe((res: any) => {
      const item = res.items[0]
      if (!item) {
        this.router.navigate(['not-found']);
        return;
      }
      this.imageUrl = item.snippet.thumbnails.high.url;
      this.header = item.snippet.channelTitle;
      this.date = item.snippet.publishedAt;
      this.text = item.snippet.description;
      this.statistics = item.statistics;
      this.bgColor = ResultService.setCorrectBorderColor(item.snippet.publishedAt);
    })
  }
}
