import { db } from './db';

import { books } from './db/__generated__/schema';

const getBookDetails = async (id: ID): Promise<NexusGen['fieldTypes']['Book']> => {
    return await db('books').select('*').where({id}).first();
}

export { getBookDetails };
