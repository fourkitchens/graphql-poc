import { PublicEvent } from '@graphql-poc/events';

const events: PublicEvent[] = [
  {
    date: 1600451756241,
    title: 'EDM Rave!',
    description:
      'We are going to get together and get down to some spicy beats!',
    rsvpRequired: false,
    location: {
      street: '1345 Walrus Street',
      city: 'San Diego',
      state: 'CA',
      zipcode: 34985,
    },
  },
  {
    date: 1600451756242,
    title: 'Reading Club Meetup',
    description: 'We are currently reading through "War and Peace"! Join us!',
    rsvpRequired: true,
    location: {
      street: '1345 Waverly Street',
      city: 'Houston',
      state: 'TX',
      zipcode: 76534,
    },
  },
  {
    date: 1600451756243,
    title: 'Apple Picking',
    description: 'We are gathering at the apple farm to pick apples together',
    rsvpRequired: true,
    location: {
      street: '588 FM-600',
      city: 'Waco',
      state: 'TX',
      zipcode: 79465,
    },
  },
];

export default events;
