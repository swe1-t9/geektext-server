/*import { extendType, inputObjectType, arg, intArg, stringArg } from 'nexus';
import { getSortedRatings } from '../../data/review'

const SortedRatings = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field('sorted_ratings',
    {
      type: 'Review', 
      args: {
        input: arg({
          type: 'SortedRatingsInput',
          required: true
        })
      },
      async resolve (root, {input: {book_id,field_to_sort_by, sort_direction}}){
       return await getSortedRatings(book_id,field_to_sort_by, sort_direction)
      }
    });
  }
})

const SortedRatingsInput = inputObjectType({
  name: 'SortedRatingsInput',
  definition(t) {
    t.string('book_id', {required: false} );
    t.string('field_to_sort_by', { required: true });
    t.string('sort_direction', { required: true});
  }
});

export { SortedRatings, SortedRatingsInput };
*/