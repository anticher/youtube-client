import { FormControl } from '@angular/forms';

export class DateValidator {
  public static isCorrect(control: FormControl) :{ [key: string]: boolean } | null {
    const inputDate = control.value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (!inputDate || Date.parse(inputDate) - Date.parse(currentDate) >= 0) {
      return null;
    }
    return { dateValidator: true };
  }
}
