import './env';

import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import express from 'express';
import nullthrows from 'nullthrows';

import { types } from './graphql/schema';

const { PORT } = process.env;

const app = express();
const apollo = new ApolloServer({
  schema: makeSchema({
    types,
    outputs: false
  })
});

apollo.applyMiddleware({ app });

const onServerStart = (): void => {
  console.log(
    `> Server started on http://localhost:${PORT}${apollo.graphqlPath}`
  );
};

app.listen({ port: nullthrows(PORT) }, onServerStart);
