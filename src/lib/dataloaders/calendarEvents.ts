import type { QueryEventsArgs } from '@graphql-poc/graphql';
import type { CalendarEvent } from '@graphql-poc/events';
import Dataloader, { BatchLoadFn } from 'dataloader';
import calendarEvents from '../../data/event-calendar';

const batchLoadFn: BatchLoadFn<QueryEventsArgs, CalendarEvent[]> = async (
  keys
) =>
  keys.map(({ isVirtual }) =>
    calendarEvents.filter(({ location }) => isVirtual && !!location.url)
  );

const cacheKeyFn = ({ isVirtual }: QueryEventsArgs) => String(isVirtual);

export default new Dataloader(batchLoadFn, { cacheKeyFn });
