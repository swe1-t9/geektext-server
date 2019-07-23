import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { addToShoppingCart, getShoppingCartByUserId } from '../../data/shoppingCart';

const AddToShoppingCartInput = inputObjectType({
  name: 'AddToShoppingCartInput',
  definition(t) {
    t.string('book_id', {required: true});
    t.int('amount', {required: true});
  }
});

const AddToShoppingCart = mutationField('add_to_shopping_cart', {
  type: 'ShoppingCartItem',
  args: {
    input: arg({
      type: 'AddToShoppingCartInput',
      required: true
    })
  },
  async resolve(root, { input: { book_id, amount }}, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const cart = await getShoppingCartByUserId(ctx.viewer.id);
    const { id } = await addToShoppingCart(cart.id, book_id, amount);
    return { id, amount };
  }
});

export { AddToShoppingCartInput, AddToShoppingCart };
