import { objectType } from 'nexus';

import { getSavedCartItemByItemId } from '../../data/savedCartItem'
import { getBookById } from '../../data/book'

const SavedCartItem = objectType({
  name: 'SavedCartItem',
  description: "An item in a user's saved-for-later list.",
  definition(t) {
    t.id('id');
    t.field('book', {
      type: 'Book',
      description: "The book this item represents.",
      async resolve(cartItem) {
        const { book_id } = await getSavedCartItemByItemId(cartItem.id);
        return await getBookById(book_id);
      }
    });
    t.int('amount')
  }
});

export { SavedCartItem };
