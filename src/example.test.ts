import example from './example';

describe('example', () => {
  it('can add two numbers', () => {
    expect(example(1, 2)).toBe(3);
  });
});
