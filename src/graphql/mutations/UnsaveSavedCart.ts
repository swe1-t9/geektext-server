import { AuthenticationError } from 'apollo-server-core';
import { mutationField } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { unsaveSavedCart } from '../../data/savedCart';

const UnsaveSavedCart = mutationField('unsave_saved_cart', {
  type: 'ShoppingCart',
  async resolve( root, args, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const { id } = await unsaveSavedCart(ctx.viewer.id);
    return { id };
  }
});

export { UnsaveSavedCart };
