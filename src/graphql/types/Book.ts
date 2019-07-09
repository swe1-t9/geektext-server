//TODO: change to book detail information

import { objectType } from 'nexus';

const Book = objectType({
  name: 'Book',
  description: 'The details of a book.',
  definition(t) {
    t.string('book_id');
    t.string('isbn');
    t.string('author_id');
    t.string('price');
    t.string('title');
    t.string('genre');
    t.int('publish_year');
  }
});

export { Book };
