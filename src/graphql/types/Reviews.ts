import { objectType } from 'nexus';

const Reviews = objectType({
  name: 'Reviews',
  description: 'User comment and star rating (review) for a book',
  definition(t) {
    t.id('id');
    t.id('user_id');
    t.id('book_id');
    t.string('title');
    t.string('body');
    t.int('rating');
  }
});

export { Reviews };