/*import { extendType, inputObjectType, arg } from 'nexus';
import { getAverageRating } from '../../data/review'

const AverageRating = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field('sorted_ratings',
    {
      type: 'Review', 
      args: {
        input: arg({
          type: 'AverageRatingInput',
          required: true
        })
      },
      async resolve (root, {input: {book_id}}){
       return await getAverageRating(book_id)
      }
    });
  }
})

const AverageRatingInput = inputObjectType({
  name: 'AverageRatingInput',
  definition(t) {
    t.string('book_id', {required: false} );
  }
});

export { AverageRating, AverageRatingInput };*/