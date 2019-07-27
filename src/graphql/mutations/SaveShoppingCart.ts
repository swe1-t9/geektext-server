import { AuthenticationError } from 'apollo-server-core';
import { mutationField } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { saveShoppingCart } from '../../data/shoppingCart';

const SaveShoppingCart = mutationField('save_shopping_cart', {
  type: 'SavedCart',
  async resolve( root, args, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const { id } = await saveShoppingCart(ctx.viewer.id);
    return { id };
  }
});

export { SaveShoppingCart };
