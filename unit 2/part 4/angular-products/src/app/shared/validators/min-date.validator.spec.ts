import { MinDateValidator } from './min-date.validator';

describe('MinDateValidator', () => {
  it('should create an instance', () => {
    const directive = new MinDateValidator();
    expect(directive).toBeTruthy();
  });
});
