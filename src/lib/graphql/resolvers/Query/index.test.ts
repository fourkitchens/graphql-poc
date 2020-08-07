import { wizard } from './index';

describe('wizard', () => {
  it('can return "nice!"', () => {
    expect.assertions(1);
    expect(wizard()).toBe('nice!');
  });
});
