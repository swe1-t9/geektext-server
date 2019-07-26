/*import { extendType, inputObjectType, arg } from 'nexus';
import { getRatingCountByBookId } from '../../data/review'

const CountRating = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field('sorted_ratings',
    {
      type: 'Review', 
      args: {
        input: arg({
          type: 'CountRatingInput',
          required: true
        })
      },
      async resolve (root, {input: {book_id,starRating}}){
       return await getRatingCountByBookId(book_id,starRating)
      }
    });
  }
})

const CountRatingInput = inputObjectType({
  name: 'CountRatingInput',
  definition(t) {
    t.string('book_id', {required: false} );
    t.int('starRating', { required: true });
  }
});

export { CountRating, CountRatingInput };*/