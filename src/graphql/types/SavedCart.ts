import { objectType } from 'nexus';

import { getSavedCartItemsByCartId } from '../../data/savedCartItem'

const SavedCart = objectType({
  name: 'SavedCart',
  description: 'A list of items the user has saved for later.',
  definition(t) {
    t.id('id');
    t.list.field('items', {
      type: 'SavedCartItem',
      async resolve(cart) {
        return await getSavedCartItemsByCartId(cart.id)
      }
    });
  }
});

export { SavedCart };
