import type {
  Event,
  RequireFields,
  QueryEventsArgs,
  ResolverFn,
  Maybe,
  ResolverTypeWrapper,
  GraphQLContext,
  Record,
} from '@graphql-poc/graphql';
import type { CalendarEvent, PublicEvent } from '@graphql-poc/events';
import calendarEvents from '../../../../data/event-calendar';
import publicEvents from '../../../../data/public-events';

const calenderEventToGqlEvent = ({
  date,
  location: { url, entryCode },
  title,
  description,
}: CalendarEvent): Event => ({
  date,
  title,
  description,
  location: `Url: ${url}, Passcord: ${entryCode}`,
});

const publicEventToGqlEvent = ({
  date,
  location: { street, city, state, zipcode },
  title,
  description,
}: PublicEvent): Event => ({
  date,
  title,
  description,
  location: `${street}, ${city} ${state}, ${zipcode}`,
});

export const events: ResolverFn<
  Maybe<Maybe<ResolverTypeWrapper<Event>>[]>,
  Record<string, unknown>,
  GraphQLContext,
  RequireFields<QueryEventsArgs, 'isVirtual'>
> = async (_, args) =>
  [
    ...calendarEvents
      .filter(({ location }) => args.isVirtual && !!location.url)
      .map(calenderEventToGqlEvent),
    ...publicEvents.map(publicEventToGqlEvent),
  ].sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }

    return 1;
  });
