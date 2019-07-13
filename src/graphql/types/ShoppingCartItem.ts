import { objectType } from 'nexus';

const ShoppingCartItem = objectType({
  name: 'ShoppingCartItem',
  description: "An item in a user's shopping cart.",
  definition(t) {
    t.id('id');
    t.id('cart_id');
    t.id('book_id');
    t.int('amount')
  }
});

export { ShoppingCartItem };
