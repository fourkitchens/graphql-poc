import publicEvents from './publicEvents';

describe('publicEvents', () => {
  it('can load public events', async () => {
    expect.assertions(1);
    await expect(
      publicEvents.load({ isVirtual: false, rsvpRequired: true })
    ).resolves.toEqual([
      {
        date: 1600451756242,
        description:
          'We are currently reading through "War and Peace"! Join us!',
        location: {
          city: 'Houston',
          state: 'TX',
          street: '1345 Waverly Street',
          zipcode: 76534,
        },
        rsvpRequired: true,
        title: 'Reading Club Meetup',
      },
      {
        date: 1600451756243,
        description:
          'We are gathering at the apple farm to pick apples together',
        location: {
          city: 'Waco',
          state: 'TX',
          street: '588 FM-600',
          zipcode: 79465,
        },
        rsvpRequired: true,
        title: 'Apple Picking',
      },
    ]);
  });
});
