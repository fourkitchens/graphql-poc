import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { schema } from './lib/graphql';

async function start() {
  const app = express();
  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });
  const port = 3002;
  const host = 'localhost';
  app.listen({ port }, () => {
    /* tslint:disable no-console */
    console.info(
      `😎 Server available at ${host}:${port}${server.graphqlPath}, and playground is available at ${host}:${port}${server.graphqlPath}/playground`
    );
  });
}

start();
