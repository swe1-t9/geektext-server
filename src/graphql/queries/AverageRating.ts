import { queryField, inputObjectType, arg } from 'nexus';
import { getAverageRating } from '../../data/review'
/*
const AverageRating  = queryField('average_rating', {
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


const AverageRatingInput = inputObjectType({
  name: 'AverageRatingInput',
  definition(t) {
    t.string('book_id', {required: true} );
  }
});

export { AverageRating, AverageRatingInput };*/