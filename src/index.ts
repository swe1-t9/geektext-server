import './env';

import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import express from 'express';
import jwt from 'express-jwt';
import nullthrows from 'nullthrows';

import { types } from './graphql/schema';
import { getUserById } from './data/user';
import { RequestWithContext } from './utils/types';

const { PORT, JWT_SECRET } = process.env;

const app = express();
const apollo = new ApolloServer({
  schema: makeSchema({
    types,
    outputs: false
  }),
  async context(ctx) {
    const {
      req: { user }
    }: { req: RequestWithContext } = ctx;
    if (!!user) {
      return { viewer: await getUserById(user.id) };
    }
  }
});

app.use(jwt({ secret: nullthrows(JWT_SECRET), credentialsRequired: false }));

apollo.applyMiddleware({ app });

const onServerStart = (): void => {
  console.log(
    `> Server started on http://localhost:${PORT}${apollo.graphqlPath}`
  );
};

app.listen({ port: nullthrows(PORT) }, onServerStart);
