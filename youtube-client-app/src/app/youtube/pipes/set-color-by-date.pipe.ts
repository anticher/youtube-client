import { Pipe, PipeTransform } from '@angular/core';
  
  const millisecondsInASecond = 1000;

  const secondsInAminute = 60;

  const minutesInAnHour = 60;

  const hoursInADay = 24;

  const halfAYear = 180;

  const week = 7;

  const month = 30;

@Pipe({
  name: 'setColorByDate',
})
export class SetColorByDatePipe implements PipeTransform {
  private color: string = '';

  private days: number = 0;

  public transform(publishedDate: string): string {
    if (publishedDate) {
      this.getPublishedDaysAgo(publishedDate);
      this.getBorderColorByDays(this.days);
    }
    return this.color;
  }

  private getPublishedDaysAgo(publishedDate: string): void {
    const milliseconds = Date.now() - new Date(publishedDate).getTime();
    const millisecondsToDays = milliseconds
    / (
      millisecondsInASecond
      * secondsInAminute
      * minutesInAnHour
      * hoursInADay
    );
    this.days = millisecondsToDays;
  }

  private getBorderColorByDays(days: number): void {
    switch (true) {
      case days > halfAYear:
        this.color = '#EB5757';
        break;
      case days < week:
        this.color = '#27AE60';
        break;
      case days < month:
        this.color = '#2F80ED';
        break;
      default:
        this.color = '#F2C94C';
    }
  }
}
