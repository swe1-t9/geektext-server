import { objectType } from 'nexus';

const Review = objectType({
  name: 'Review',
  description: 'Comment and rating for a book',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('body');
    t.int('rating');
    t.boolean('isAnon');
    t.field('reviewer',{
      type: 'User'
    });
  }
});

export { Review };