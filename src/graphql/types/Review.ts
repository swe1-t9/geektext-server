import { objectType } from 'nexus';
import { getSortedRatings, getAverageRating, getRatingCountByBookId } from '../../data/review'
import { resolve } from 'url';

const Review = objectType({
  name: 'Review',
  description: 'Comment and rating for a book',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('body');
    t.int('rating');
    t.field('user_id',{
      type: 'User'
    });
  }
});

export { Review };