import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss'],
})
export class StatisticsItemComponent {
  @Input() set type(type: string) {
    this.itemType = type;
    this.setStatistics();
  }

  @Input() number: string = '';

  private itemType: string = '';

  public viewed:boolean = false;

  public liked:boolean = false;

  public comments:boolean = false;

  private setStatistics(): void {
    switch (this.itemType) {
      case 'viewed':
        this.viewed = true;
        this.liked = false;
        this.comments = false;
        break;
      case 'liked':
        this.viewed = false;
        this.liked = true;
        this.comments = false;
        break;
      case 'comments':
        this.viewed = false;
        this.liked = false;
        this.comments = true;
        break;
      default:
        this.viewed = false;
        this.liked = false;
        this.comments = false;
    }
  }
}
