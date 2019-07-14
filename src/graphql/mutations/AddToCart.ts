import { mutationField, arg, inputObjectType } from 'nexus';

import { addToShoppingCart, getShoppingCartByUserId } from '../../data/shoppingCart';

const AddToShoppingCartInput = inputObjectType({
  name: 'AddToShoppingCartInput',
  definition(t) {
    t.string('user_id', {required: true});
    // TODO: Replace this user_id line with code to get id of logged-in user
    t.string('book_id', {required: true});
    t.int('amount', {required: true});
  }
});

const AddToShoppingCart = mutationField('add_to_cart', {
  type: 'ShoppingCartItem',
  args: {
    input: arg({
      type: 'AddToShoppingCartInput',
      required: true
    })
  },
  async resolve(root, { input: { user_id, book_id, amount } }) {
    const cart = await getShoppingCartByUserId(user_id);
    const { id } = await addToShoppingCart(cart.id, book_id, amount);
    return { id, amount };
  }
});

export { AddToShoppingCartInput, AddToShoppingCart };
