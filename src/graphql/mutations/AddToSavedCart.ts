import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { addToSavedCart, getSavedCartByUserId } from '../../data/savedCart';

const AddToSavedCartInput = inputObjectType({
  name: 'AddToSavedCartInput',
  definition(t) {
    t.string('book_id', {required: true});
    t.int('amount', {required: true});
  }
});

const AddToSavedCart = mutationField('add_to_saved_cart', {
  type: 'SavedCartItem',
  args: {
    input: arg({
      type: 'AddToSavedCartInput',
      required: true
    })
  },
  async resolve(root, { input: { book_id, amount }}, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const cart = await getSavedCartByUserId(ctx.viewer.id);
    const { id } = await addToSavedCart(cart.id, book_id, amount);
    return { id, amount };
  }
});

export { AddToSavedCartInput, AddToSavedCart };
