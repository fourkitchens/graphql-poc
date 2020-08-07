import type { Resolvers } from '@graphql-poc/graphql';
import { join } from 'path';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import * as Query from './resolvers/Query';
import { GraphQLSchema } from 'graphql';

// @TODO: This will need to be fleshed out when we have more requirements.
export type GraphQLContext = any;

export const typeDefs = importSchema(join(__dirname, 'typeDefs/Root.graphql'));

export const resolvers: Resolvers = {
  Query,
};

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
