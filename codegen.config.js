module.exports = {
  schema: './src/lib/graphql/typeDefs/Root.graphql',
  generates: {
    './src/types/_graphql.d.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        noSchemaStitching: true,
        contextType: '../lib/graphql#GraphQLContext',
      },
    },
  },
};
