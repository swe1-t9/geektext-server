import { db } from './db';

import { books } from './db/__generated__/schema';

const getBookDetails = async (id: ID): Promise<books> => {
  return await db('books')
    .select('*')
    .where({ id })
    .first();
};

const getBookById = async (id: ID): Promise<books> => {
  return await db('books')
    .select('*')
    .where({ id })
    .first();
};

export { getBookDetails, getBookById };
