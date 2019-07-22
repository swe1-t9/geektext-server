import { objectType } from 'nexus';

const Reviews = objectType({
  name: 'Reviews',
  description: 'User comment and star rating (review) for a book',
  definition(t) {
    t.id('id');
    t.field('user_id', {
      type: 'User'
    });
    t.string('title');
    t.string('body');
    t.int('rating');
  }
});

export { Reviews };