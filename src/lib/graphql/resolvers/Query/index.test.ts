import calendarEvents from '../../../dataloaders/calendarEvents';
import publicEvents from '../../../dataloaders/publicEvents';
import type { GraphQLResolveInfo } from 'graphql';
import { events } from './index';

jest.spyOn(publicEvents, 'load');
jest.spyOn(calendarEvents, 'load');

describe('events', () => {
  it('can load up and resolve virtual public and calendar events with no rsvp required', async () => {
    expect.assertions(3);
    const args = {
      isVirtual: true,
      rsvpRequired: false,
    };
    await expect(
      events({}, args, {}, {} as GraphQLResolveInfo)
    ).resolves.toEqual([
      {
        date: 1600451756241,
        description:
          'We are going to get together and get down to some spicy beats!',
        location: '1345 Walrus Street, San Diego CA, 34985',
        title: 'EDM Rave!',
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

    expect(publicEvents.load).toHaveBeenCalledWith(args);
    expect(calendarEvents.load).toHaveBeenCalledWith(args);
  });

  it('can resolve non-virtual public and calendar events that require an rsvp', async () => {
    expect.assertions(1);
    await expect(
      events(
        {},
        {
          isVirtual: false,
          rsvpRequired: true,
        },
        {},
        {} as GraphQLResolveInfo
      )
    ).resolves.toEqual([
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
