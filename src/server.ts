import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import config from 'config';
import { schema } from './lib/graphql';

const {
  port,
  host,
}: {
  port: number;
  host: string;
} = config.get('server');

async function start() {
  const app = express();
  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });
  app.listen({ port }, () => {
    /* tslint:disable no-console */
    console.info(
      `😎 Server available at ${host}:${port}${server.graphqlPath}, and playground is available at ${host}:${port}${server.graphqlPath}/playground`
    );
  });
}

start();
