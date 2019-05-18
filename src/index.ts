import './env';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { schema } from './graphql/schema';

const { PORT } = process.env;

const app = express();
const apollo = new ApolloServer({
  schema
});

apollo.applyMiddleware({ app });

const onServerStart = (): void => {
  console.log(
    `> Server started on http://localhost:${PORT}${apollo.graphqlPath}`
  );
};

app.listen({ port: !PORT }, onServerStart);
