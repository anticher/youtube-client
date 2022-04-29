import { SetColorByDatePipe } from './set-color-by-date.pipe';

function getDateString(daysHasGone: number): string {
  return (new Date(new Date().setDate(new Date().getDate() - daysHasGone))).toDateString();
}

describe('SetColorByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SetColorByDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return #27AE60', () => {
    const pipe = new SetColorByDatePipe();
    const date = getDateString(1);
    const result = pipe.transform(date);
    expect(result).toBe('#27AE60');
  });

  it('should return #2F80ED', () => {
    const pipe = new SetColorByDatePipe();
    const date = getDateString(20);
    const result = pipe.transform(date);
    expect(result).toBe('#2F80ED');
  });

  it('should return #F2C94C', () => {
    const pipe = new SetColorByDatePipe();
    const date = getDateString(50);
    const result = pipe.transform(date);
    expect(result).toBe('#F2C94C');
  });

  it('should return #EB5757', () => {
    const pipe = new SetColorByDatePipe();
    const date = getDateString(200);
    const result = pipe.transform(date);
    expect(result).toBe('#EB5757');
  });
});
