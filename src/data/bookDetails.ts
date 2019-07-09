import { db } from './db';

import { books } from './db/__generated__/schema';

const getBookDetails = async (book_id: ID): Promise<NexusGen['fieldTypes']['Book']> => {
    return await db('books').select('*').where({book_id}).first();
}

export { getBookDetails };
