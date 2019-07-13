import './env';

import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import express from 'express';
import nullthrows from 'nullthrows';

import { types } from './graphql/schema';
import { Context } from './graphql/context/Context';
import { RequestWithContext } from './utils/types';

const { PORT } = process.env;

const app = express();
const apollo = new ApolloServer({
  schema: makeSchema({
    types,
    outputs: false
  }),
  context(ctx) {
    const {
      req: { user }
    }: { req: RequestWithContext } = ctx;
    if (!!user) {
      return new Context(user.id);
    }
    return ctx;
  }
});

apollo.applyMiddleware({ app });

const onServerStart = (): void => {
  console.log(
    `> Server started on http://localhost:${PORT}${apollo.graphqlPath}`
  );
};

app.listen({ port: nullthrows(PORT) }, onServerStart);
