import { db } from './db';

import { books } from './db/__generated__/schema';

const getBookById = async (id: ID): Promise<books> => {
  return await db('books')
    .select('*')
    .where({ id })
    .first();
};

const getBooksByAuthorId = async(authorId: ID): Promise<Array<books>> => {
  return await db('books')
  .select('*')
  .where({ author_id: authorId })

};
export { getBookById, getBooksByAuthorId };
