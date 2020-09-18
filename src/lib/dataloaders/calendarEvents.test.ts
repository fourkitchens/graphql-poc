import calendarEvents from './calendarEvents';

describe('calendarEvents', () => {
  it('can load calendar events', async () => {
    expect.assertions(1);
    await expect(
      calendarEvents.load({ isVirtual: true, rsvpRequired: false })
    ).resolves.toEqual([
      {
        date: 1600451756244,
        description: "We will meet to discuss this quarter's earning reports.",
        guests: [
          {
            email: 'elon@tesla-fake-website.com',
            firstName: 'Elon',
            lastName: 'Musk',
            phone: '(111) 222-3333',
          },
          {
            email: 'bill@gates-fake-website.com',
            firstName: 'Bill',
            lastName: 'Gates',
            phone: '(444) 555-6666',
          },
        ],
        location: { entryCode: 'qa29t5d', url: 'https://zoom.us/meeting-id' },
        title: 'Board Meeting',
      },
      {
        date: 1600451756245,
        description: 'Daily scrum meeting.',
        guests: [
          {
            email: 'john.doe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            phone: '(111) 222-3333',
          },
          {
            email: 'sara.logan@gmail.com',
            firstName: 'Sarah',
            lastName: 'Logan',
            phone: '(444) 555-6666',
          },
          {
            email: 'don.harmon@gmail.com',
            firstName: 'Don',
            lastName: 'Harmon',
            phone: '(777) 888-9999',
          },
        ],
        location: { entryCode: 'ko94co', url: 'https://zoom.us/meeting-id' },
        title: 'Scrum',
      },
    ]);
  });
});
