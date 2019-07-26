import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { removeFromShoppingCart, getShoppingCartByUserId } from '../../data/shoppingCart';

const RemoveFromShoppingCartInput = inputObjectType({
  name: 'RemoveFromShoppingCartInput',
  definition(t) {
    t.string('item_id', {required: true});
  }
});

const RemoveFromShoppingCart = mutationField('remove_from_shopping_cart', {
  type: 'ShoppingCart',
  args: {
    input: arg({
      type: 'RemoveFromShoppingCartInput',
      required: true
    })
  },
  async resolve(root, { input: { item_id }}, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    await removeFromShoppingCart(item_id);
    const { id } = await getShoppingCartByUserId(ctx.viewer.id)
    return { id }
  }
});

export { RemoveFromShoppingCartInput, RemoveFromShoppingCart };
