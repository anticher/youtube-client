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
    commentCount: '',
    dislikeCount: '',
    likeCount: '',
    viewCount: '',
  }

  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
    private resultService: ResultService,
  ) { }

  ngOnInit() {
    const index = this.router.url.lastIndexOf('/') + 1
    const id = this.router.url.substring(index)
    const item = this.searchDataService.getDataById(id)
    this.imageUrl = item.snippet.thumbnails.maxres.url
    this.header = item.snippet.channelTitle;
    this.date = item.snippet.publishedAt;
    this.text = item.snippet.description;
    this.statistics = {
      commentCount: item.statistics.commentCount,
      dislikeCount: item.statistics.dislikeCount,
      likeCount: item.statistics.likeCount,
      viewCount: item.statistics.viewCount,
    }
    this.bgColor = this.resultService.setCorrectBorderColor(item.snippet.publishedAt)
    console.log(item)
    console.log(item.snippet.thumbnails)
  }
}
