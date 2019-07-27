import { AuthenticationError } from 'apollo-server-core';
import { mutationField } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { checkoutUser } from '../../data/shoppingCart';

const CheckoutUser = mutationField('checkout_user', {
  type: 'ShoppingCart',
  async resolve( root, args, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const { id } = await checkoutUser(ctx.viewer.id);
    return { id };
  }
});

export { CheckoutUser };
