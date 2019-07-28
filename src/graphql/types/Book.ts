import { objectType } from 'nexus';
import { getBookById } from '../../data/book';
import { getAuthorById } from '../../data/author';

const Book = objectType({
  name: 'Book',
  description: 'The details of a book.',
  definition(t) {
    t.id('id');
    t.string('isbn');
    t.field('author', {
      type: "Author", async resolve(book) {
        const { author_id } = await getBookById(book.id)
        return await getAuthorById(author_id)
      }
    });
    t.float('price');
    t.string('title');
    t.string('genre');
    t.int('publish_year');
    t.url('cover');
    t.string('description');
  }
});

export { Book };
