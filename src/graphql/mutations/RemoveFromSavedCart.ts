import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { removeFromSavedCart, getSavedCartByUserId } from '../../data/savedCart';

const RemoveFromSavedCartInput = inputObjectType({
  name: 'RemoveFromSavedCartInput',
  definition(t) {
    t.string('item_id', {required: true});
  }
});

const RemoveFromSavedCart = mutationField('remove_from_saved_cart', {
  type: 'SavedCart',
  args: {
    input: arg({
      type: 'RemoveFromSavedCartInput',
      required: true
    })
  },
  async resolve(root, { input: { item_id }}, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    await removeFromSavedCart(item_id);
    const { id } = await getSavedCartByUserId(ctx.viewer.id)
    return { id }
  }
});

export { RemoveFromSavedCartInput, RemoveFromSavedCart };
