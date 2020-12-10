/**
 * Module that exports event types.
 */
declare module '@graphql-poc/events' {
  export type PublicEvent = {
    date: number;
    location: PhysicalLocation;
    title: string;
    description: string;
    rsvpRequired: boolean;
  };

  export type CalendarEvent = {
    date: number;
    location: VirtualLocation;
    title: string;
    description: string;
    guests: Person[];
  };

  export type PhysicalLocation = {
    street: string;
    city: string;
    state: State;
    zipcode: number;
  };

  export type VirtualLocation = {
    url: string;
    entryCode: string;
  };

  export type Person = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  export type State =
    | 'AL'
    | 'AK'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'FL'
    | 'GA'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY';
}
