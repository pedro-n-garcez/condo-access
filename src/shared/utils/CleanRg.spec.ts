import cleanRg from './CleanRg';

describe('cleanRg', () => {
  it('should remove dots and dashes from string', () => {
    const rg = '12.345.678-9';
    expect(cleanRg(rg)).toBe('123456789');
  });

  it('should return same string if there are no dots and dashes', () => {
    const rg = '123456789';
    expect(cleanRg(rg)).toBe('123456789');
  });
});