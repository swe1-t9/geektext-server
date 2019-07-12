import Knex from 'knex';

const { DATABASE_URL } = process.env;

const db = Knex({
  client: 'pg',
  connection: DATABASE_URL
});

DATABASE_URL && console.log(`> Initialized database on ${DATABASE_URL}`);

export { db };
