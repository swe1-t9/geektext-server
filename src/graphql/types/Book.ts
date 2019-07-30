import { objectType } from 'nexus';
import { resolve } from 'path';
import { getReviewsByBookId, getAverageRating } from '../../data/review';
import { getBookById } from '../../data/book';
import { getAuthorById } from '../../data/author';
import nullthrows from 'nullthrows';

const Book = objectType({
  name: 'Book',
  description: 'The details of a book.',
  definition(t) {
    t.id('id');
    t.string('isbn');
    t.field('author', {
      type: 'Author',
      async resolve(book) {
        const { author_id } = await getBookById(book.id);
        return await getAuthorById(author_id);
      }
    });
    t.float('average_rating', {
      async resolve(book) {
        const averageRating = await getAverageRating(book.id);
        if (!averageRating) {
          return 0;
        }
        return nullthrows(averageRating.rating);
      }
    });
    t.float('price');
    t.string('title');
    t.string('genre');
    t.int('publish_year');
    t.url('cover');
    t.string('description');
    t.list.field('reviews', {
      type: 'Review',
      async resolve(book) {
        return await getReviewsByBookId(book.id);
      }
    });
  }
});

export { Book };
