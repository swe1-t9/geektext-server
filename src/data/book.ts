import { db } from './db';

import { books } from './db/__generated__/schema';


//Sorting
const getSortedBooks = async (fieldToSortBy: string, sortDirection: string): Promise<Array<books>> => {
  return await db('books').select('*').orderBy(fieldToSortBy, sortDirection)
}

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
export { getBookById, getBooksByAuthorId, getSortedBooks };
