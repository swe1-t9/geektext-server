import { objectType } from 'nexus';

import { getShoppingCartItemByItemId } from '../../data/shoppingCartItem'
import { getBookById } from '../../data/bookDetails'

const ShoppingCartItem = objectType({
  name: 'ShoppingCartItem',
  description: "An item in a user's shopping cart.",
  definition(t) {
    t.id('id');
    t.field('book', {
      type: 'Book',
      description: "The book this item represents.",
      async resolve(cartItem) {
        const { book_id } = await getShoppingCartItemByItemId(cartItem.id);
        return await getBookById(book_id);
      }
    });
    t.int('amount')
  }
});

export { ShoppingCartItem };
