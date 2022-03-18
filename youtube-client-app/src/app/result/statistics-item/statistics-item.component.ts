import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss'],
})
export class StatisticsItemComponent implements OnInit {
  @Input() type: string = '';

  @Input() number: string = '';

  viewed = false;

  liked = false;

  disliked = false;

  comments = false;

  ngOnInit(): void {
    this.setStatistics();
  }

  setStatistics() {
    switch (this.type) {
      case 'viewed':
        this.viewed = true;
        break;
      case 'liked':
        this.liked = true;
        break;
      case 'disliked':
        this.disliked = true;
        break;
      case 'comments':
        this.comments = true;
        break;
      default:
        this.viewed = false;
        this.liked = false;
        this.disliked = false;
        this.comments = false;
    }
  }
}
