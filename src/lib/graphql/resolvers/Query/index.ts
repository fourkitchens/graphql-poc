import type {
  Event,
  RequireFields,
  QueryEventsArgs,
  ResolverFn,
  Maybe,
  ResolverTypeWrapper,
  GraphQLContext,
} from '@graphql-poc/graphql';
import type { CalendarEvent, PublicEvent } from '@graphql-poc/events';
import calendarEvents from '../../../dataloaders/calendarEvents';
import publicEvents from '../../../dataloaders/publicEvents';
import catchLater from '../../../../util/catchLater';

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
  Record<string, Event>,
  GraphQLContext,
  RequireFields<QueryEventsArgs, 'isVirtual'> &
    RequireFields<QueryEventsArgs, 'rsvpRequired'>
> = async (_, args) => {
  const calEventsP = catchLater(calendarEvents.load(args));
  const pubEventsP = catchLater(publicEvents.load(args));
  return [
    ...(await calEventsP).map(calenderEventToGqlEvent),
    ...(await pubEventsP).map(publicEventToGqlEvent),
  ].sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }

    return 1;
  });
};
