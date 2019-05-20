const dotenv = require('dotenv').config({ path: '../../.env' });

const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: 'migrations'
    }
  }
};
