import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgb',
})
export class HexToRgbPipe implements PipeTransform {
  private result: RegExpExecArray | null = null;

  public transform(hex: string): string {
    this.result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (this.result) {
      const r = parseInt(this.result[1], 16);
      const g = parseInt(this.result[2], 16);
      const b = parseInt(this.result[3], 16);
      return `${r},${g},${b}`;
    }
    return hex;
  }
}
