import { db } from './db';
import { books } from './db/__generated__/schema';

//Sorting
const getSortedBooks = async (fieldToSortBy: string, sortDirection: string): Promise<Array<books>> => {
  return await db('books').select('*').orderBy(fieldToSortBy, sortDirection)
};

export { getSortedBooks }

