import { objectType } from 'nexus';

import { getShoppingCartItemsByCartId } from '../../data/shoppingCartItem'

const ShoppingCart = objectType({
  name: 'ShoppingCart',
  description: 'A shopping cart, holding items to be purchased later.',
  definition(t) {
    t.id('id');
    t.list.field('items', {
      type: 'ShoppingCartItem',
      async resolve(cart) {
        return await getShoppingCartItemsByCartId(cart.id)
      }
    });
  }
});

export { ShoppingCart };
