import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setColorByDate',
})
export class SetColorByDatePipe implements PipeTransform {
  private color: string = '';

  private millisecondsInASecond = 1000;

  private secondsInAminute = 60;

  private minutesInAnHour = 60;

  private hoursInADay = 24;

  public transform(publishedDate: string): string {
    if (publishedDate) {
      const days = this.getPublishedDaysAgo(publishedDate);
      return this.getBorderColorByDays(days);
    }
    return this.color;
  }

  private getPublishedDaysAgo(publishedDate: string) {
    const milliseconds = Date.now() - new Date(publishedDate).getTime();
    const millisecondsToDays = milliseconds
    / (
      this.millisecondsInASecond
      * this.secondsInAminute
      * this.minutesInAnHour
      * this.hoursInADay
    );
    return millisecondsToDays;
  }

  private getBorderColorByDays(days: number): string {
    switch (true) {
      case days > 180:
        return '#EB5757';
      case days < 7:
        return '#27AE60';
      case days < 30:
        return '#2F80ED';
      default:
        return '#F2C94C';
    }
  }
}
