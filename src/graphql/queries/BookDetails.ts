import { queryField, inputObjectType, arg } from 'nexus';

import { getBookById } from '../../data/book';

const BookDetailsQuery = queryField('book_details', {
  type: 'Book',
  args: {
    input: arg({
      type: 'BookDetailsInput',
      required: true
    })
  },
  async resolve(root, { input: { id } }) {
    return await getBookById(id);
  }
});

const BookDetailsInput = inputObjectType({
  name: 'BookDetailsInput',
  definition(t) {
    t.id('id', { required: true });
  }
});

export { BookDetailsQuery, BookDetailsInput };
