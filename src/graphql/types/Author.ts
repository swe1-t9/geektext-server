import { objectType } from 'nexus';
import { getBooksByAuthorId } from '../../data/book'

const Author = objectType({
  name: 'Author',
  description: 'Author details',
  definition(t) {
    t.id('id');
    t.string('first_name');
    t.string('last_name');
    t.string('bio');
    t.list.field('books', {
      type: 'Book', async resolve(author) {
        return await getBooksByAuthorId(author.id)
      }

    })
  }
});

export { Author };
