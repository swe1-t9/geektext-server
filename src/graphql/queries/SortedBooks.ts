import { extendType, inputObjectType, arg, intArg, stringArg } from 'nexus';
import { getSortedBooks } from '../../data/bookBrowsing';
      
const SortedBooks = extendType({
    type: "Query",
    definition: (t) => {
      t.list.field('sorted_books',
      {
        type: 'Book', 
        args: {
          input: arg({
            type: 'SortedBooksInput',
            required: true
          })
        },
        async resolve (root, {input: {field_to_sort_by, sort_direction}}){
         return await getSortedBooks(field_to_sort_by, sort_direction)
        }
      });
    }
  })
      

  const SortedBooksInput = inputObjectType({
    name: 'SortedBooksInput',
    definition(t) {
      t.string('field_to_sort_by', { required: true });
      t.string('sort_direction', { required: true});
    }
  });

  export {SortedBooksInput, SortedBooks}