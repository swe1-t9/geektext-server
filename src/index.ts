import './env';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import nullthrows from 'nullthrows';

import { schema } from './graphql/schema';
// import { getBookDetails } from './data/bookDetails';

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


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/book-details', (req, res) => {
//   //console.log("hello world!")
//   var book_id = req.query["book_id"];
//   console.log(book_id)
//   getBookDetails(book_id).then(function(book_data) {
//     res.send(book_data);
//   })
// })

app.listen({ port: nullthrows(PORT) }, onServerStart);
