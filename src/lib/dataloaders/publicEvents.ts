import type { QueryEventsArgs } from '@graphql-poc/graphql';
import type { PublicEvent } from '@graphql-poc/events';
import Dataloader, { BatchLoadFn } from 'dataloader';
import publicEvents from '../../data/public-events';

const batchLoadFn: BatchLoadFn<QueryEventsArgs, PublicEvent[]> = async (keys) =>
  keys.map(({ rsvpRequired }) =>
    publicEvents.filter(
      ({ rsvpRequired: isRequired }) => rsvpRequired === isRequired
    )
  );

const cacheKeyFn = ({ rsvpRequired }: QueryEventsArgs) => String(rsvpRequired);

export default new Dataloader(batchLoadFn, { cacheKeyFn });
