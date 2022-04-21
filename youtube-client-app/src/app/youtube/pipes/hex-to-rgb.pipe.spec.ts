import { HexToRgbPipe } from './hex-to-rgb.pipe';

describe('HexToRgbPipe', () => {
  it('create an instance', () => {
    const pipe = new HexToRgbPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "255,255,255"', () => {
    const pipe = new HexToRgbPipe();
    const result = pipe.transform('ffffff')
    expect(result).toBe('255,255,255');
  });

  it('should return "0,238,255"', () => {
    const pipe = new HexToRgbPipe();
    const result = pipe.transform('00eeff')
    expect(result).toBe('0,238,255');
  });

  it('should return input value', () => {
    const pipe = new HexToRgbPipe();
    const result = pipe.transform('test')
    expect(result).toBe('test');
  });
});
