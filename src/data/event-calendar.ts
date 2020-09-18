import { CalendarEvent } from '@graphql-poc/events';

const events: CalendarEvent[] = [
  {
    date: 1600451756244,
    title: 'Board Meeting',
    description: "We will meet to discuss this quarter's earning reports.",
    location: {
      url: 'https://zoom.us/meeting-id',
      entryCode: 'qa29t5d',
    },
    guests: [
      {
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'elon@tesla-fake-website.com',
        phone: '(111) 222-3333',
      },
      {
        firstName: 'Bill',
        lastName: 'Gates',
        email: 'bill@gates-fake-website.com',
        phone: '(444) 555-6666',
      },
    ],
  },
  {
    date: 1600451756245,
    title: 'Scrum',
    description: 'Daily scrum meeting.',
    location: {
      url: 'https://zoom.us/meeting-id',
      entryCode: 'ko94co',
    },
    guests: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        phone: '(111) 222-3333',
      },
      {
        firstName: 'Sarah',
        lastName: 'Logan',
        email: 'sara.logan@gmail.com',
        phone: '(444) 555-6666',
      },
      {
        firstName: 'Don',
        lastName: 'Harmon',
        email: 'don.harmon@gmail.com',
        phone: '(777) 888-9999',
      },
    ],
  },
];

export default events;
