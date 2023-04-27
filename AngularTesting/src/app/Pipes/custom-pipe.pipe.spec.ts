import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  const pipe = new CustomPipePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('test if userName is passed return username', () => {
    expect(pipe.transform('Bishoy')).toBe('Bishoy');
  });
  it('test if non number  is passed return error massage', () => {
    expect(pipe.transform(123)).toEqual('Not String');
  });
});
