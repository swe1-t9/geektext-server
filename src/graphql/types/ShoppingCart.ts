import { objectType } from 'nexus';

const ShoppingCart = objectType({
  name: 'ShoppingCart',
  description: 'A shopping cart, holding items to be purchased later.',
  definition(t) {
    t.id('id');
    t.id('user_id');
  }
});

export { ShoppingCart };
