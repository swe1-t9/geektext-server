import { db } from './db';

import { authors } from './db/__generated__/schema';

const getAuthorById = async (id: ID): Promise<authors> => {
  return await db('authors')
    .select('*')
    .where({ id })
    .first();
};

export { getAuthorById };