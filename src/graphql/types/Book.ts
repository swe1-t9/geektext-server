import { objectType } from 'nexus';

const Book = objectType({
  name: 'Book',
  description: 'A book currently in stock.',
  definition(t) {
    t.id('id');
    t.string('isbn');
    t.id('author_id')
    t.float('price');
    t.string('title');
    t.string('genre');
    t.int('publish_year');
  }
});

export { Book };
