import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {
  let pipe: FormatPhonePipe;

  beforeEach(() => {
    pipe = new FormatPhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle null value', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should handle undefined value', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should handle number value', () => {
    const input = 123 as any;
    expect(pipe.transform(input)).toEqual(input);
  });

  it('should transform value with default separator', () => {
    const input = '06.12.34.56.78';
    const output = '06 12 34 56 78';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('should transform value with defined separator', () => {
    const input = '06.12.34.56.78';
    const output = '06-12-34-56-78';
    expect(pipe.transform(input, '-')).toEqual(output);
  });

  it('should not transform a value which as not to be', () => {
    const input = '06-12-34-56-78';
    expect(pipe.transform(input, '-')).toEqual(input);
  });
});
