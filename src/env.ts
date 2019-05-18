if (process.env.NODE_ENV !== 'production') {
  console.log('Using development .env variables from root directory.');
  require('dotenv').config();
}
