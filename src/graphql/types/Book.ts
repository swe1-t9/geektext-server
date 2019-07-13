//TODO: change to book detail information

import { objectType } from 'nexus';

const Book = objectType({
  name: 'Book',
  description: 'The details of a book.',
  definition(t) {
    t.id('id');
    t.string('isbn');
    // TODO: We shouldn't be returning author_id, but an Author GraphQLObjectType.
    t.id('author_id');
    t.float('price');
    t.string('title');
    t.string('genre');
    t.int('publish_year');
    t.url('cover');
    t.string('description');
  }
});

export { Book };
