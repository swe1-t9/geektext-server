import { queryField,inputObjectType, arg } from 'nexus';
import { getSortedReviews } from '../../data/review'

const SortedRatings  = queryField('sorted_ratings', {
  type: 'Review',
  args: {
    input: arg({
      type: 'SortedRatingsInput',
      required: true
    })
  },
  async resolve(root, { input: { book_id,field_to_sort_by,sort_direction } }) {
    return await getSortedReviews(book_id,field_to_sort_by,sort_direction)
  }
});

const SortedRatingsInput = inputObjectType({
  name: 'SortedRatingsInput',
  definition(t) {
    t.string('book_id', { required: true });
    t.string('field_to_sort_by', { required: true });
    t.string('sort_direction', { required: true });
  }
});

export { SortedRatings, SortedRatingsInput };