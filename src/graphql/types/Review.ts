import { objectType } from 'nexus';
import { getSortedRatings, getAverageRating, getRatingCountByBookId } from '../../data/review'
/*
const Review = objectType({
  name: 'Review',
  description: 'User comment and rating for a book',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('body');
    t.int('rating');
    t.field('user_id', {
      type: 'user_id',
      description: "User making reviewer",
    });

  }
});

export { Review };*/