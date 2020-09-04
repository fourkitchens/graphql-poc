import { ApolloServer } from 'apollo-server-express';
import express from 'express';

jest.mock('apollo-server-express');
jest.mock('express');

jest.spyOn(global.console, 'info').mockImplementation(() => false);
const server = {
  applyMiddleware: jest.fn(),
  graphqlPath: '/graphql',
};
(ApolloServer as jest.MockedClass<any>).mockImplementation(() => server);
const app = {
  listen: jest.fn(),
};
(express as any).mockReturnValue(app);

import './server';

describe('server', () => {
  it('stands up an apollo server on port 3002', async () => {
    expect.assertions(5);
    expect(ApolloServer).toHaveBeenCalledWith({
      schema: expect.any(Object),
    });
    expect(express).toHaveBeenCalled();
    expect(server.applyMiddleware).toHaveBeenCalledWith({ app });
    expect(app.listen).toHaveBeenCalledWith(
      { port: 3002 },
      expect.any(Function)
    );
    app.listen.mock.calls[0][1]();
    /* tslint:disable no-console */
    expect(console.info).toHaveBeenCalledWith(
      '😎 Server available at localhost:3002/graphql, and playground is available at localhost:3002/graphql/playground'
    );
  });
});
