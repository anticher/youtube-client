import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  static setPublishedDaysAgoInMinutes(publishedDate: string): number {
    const milliseconds = Date.now() - new Date(publishedDate).getTime();
    const millisecondsToDays = milliseconds / (1000 * 60 * 60 * 24);
    return millisecondsToDays;
  }

  static setCorrectBorderColor(publishedDate: string) {
    const days = this.setPublishedDaysAgoInMinutes(publishedDate);
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
