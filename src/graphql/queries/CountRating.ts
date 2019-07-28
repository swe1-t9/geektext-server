import { queryField, inputObjectType, arg } from 'nexus';
import { getRatingCountBybookID } from '../../data/review'
/*
const CountRating  = queryField('count_ratings', {
  type: 'Review',
  args: {
    input: arg({
      type: 'CountRatingInput',
      required: true
    })
  },
  async resolve (root, {input: {book_id,starRating}}){
    return await getRatingCountBybookID(book_id,starRating)
  }
});*/

const CountRatingInput = inputObjectType({
  name: 'CountRatingInput',
  definition(t) {
    t.string('book_id', {required: false} );
    t.int('starRating', { required: true });
  }
});

//export { CountRating, CountRatingInput };