import type { GraphQLResolveInfo } from 'graphql';
import { events } from './index';

describe('events', () => {
  it('can resolve virtual public and calendar events', async () => {
    expect.assertions(1);
    await expect(
      events(
        {},
        {
          isVirtual: true,
        },
        {},
        {} as GraphQLResolveInfo
      )
    ).resolves.toEqual([
      {
        date: 1600451756241,
        description:
          'We are going to get together and get down to some spicy beats!',
        location: '1345 Walrus Street, San Diego CA, 34985',
        title: 'EDM Rave!',
      },
      {
        date: 1600451756242,
        description:
          'We are currently reading through "War and Peace"! Join us!',
        location: '1345 Waverly Street, Houston TX, 76534',
        title: 'Reading Club Meetup',
      },
      {
        date: 1600451756243,
        description:
          'We are gathering at the apple farm to pick apples together',
        location: '588 FM-600, Waco TX, 79465',
        title: 'Apple Picking',
      },
      {
        date: 1600451756244,
        description: "We will meet to discuss this quarter's earning reports.",
        location: 'Url: https://zoom.us/meeting-id, Passcord: qa29t5d',
        title: 'Board Meeting',
      },
      {
        date: 1600451756245,
        description: 'Daily scrum meeting.',
        location: 'Url: https://zoom.us/meeting-id, Passcord: ko94co',
        title: 'Scrum',
      },
    ]);
  });

  it('can resolve non-virtual public and calendar events', async () => {
    expect.assertions(1);
    await expect(
      events(
        {},
        {
          isVirtual: false,
        },
        {},
        {} as GraphQLResolveInfo
      )
    ).resolves.toEqual([
      {
        date: 1600451756241,
        description:
          'We are going to get together and get down to some spicy beats!',
        location: '1345 Walrus Street, San Diego CA, 34985',
        title: 'EDM Rave!',
      },
      {
        date: 1600451756242,
        description:
          'We are currently reading through "War and Peace"! Join us!',
        location: '1345 Waverly Street, Houston TX, 76534',
        title: 'Reading Club Meetup',
      },
      {
        date: 1600451756243,
        description:
          'We are gathering at the apple farm to pick apples together',
        location: '588 FM-600, Waco TX, 79465',
        title: 'Apple Picking',
      },
    ]);
  });
});
