import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Statistics } from '../../models/search-item.model';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  public publishedAt: string = '';

  public imageUrl: string = '';

  public header: string = '';

  public text: string = '';

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  constructor(
    private router: Router,
    private searchDataService: SearchDataService,
    private activateRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.setItemInfo();
  }

  private setItemInfo(): void {
    const id = this.activateRoute.snapshot.params[''];
    const item = this.searchDataService.getDataById(id);
    if (!item) {
      this.router.navigate(['not-found']);
      return;
    }
    this.publishedAt = item.snippet.publishedAt;
    this.imageUrl = item.snippet.thumbnails.maxres.url;
    this.header = item.snippet.channelTitle;
    this.text = item.snippet.description;
    this.statistics = item.statistics;
  }
}
