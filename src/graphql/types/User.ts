import { objectType } from 'nexus';
import { getShippingAddressesByUserId } from '../../data/shippingAddress';
import { getShoppingCartByUserId } from '../../data/shoppingCart';

const User = objectType({
  name: 'User',
  description: 'A Geektext user.',
  definition(t) {
    t.id('id');
    t.emailAddress('email');
    t.string('first_name');
    t.string('last_name');
    t.list.field('shipping_addresses', {
      type: 'ShippingAddress',
      description: `The user's shipping addresses`,
      resolve(user) {
        return getShippingAddressesByUserId(user.id);
      }
    });
    t.field('shopping_cart', {
      type: 'ShoppingCart',
      description: "The user's shopping cart",
      async resolve(user) {
        return await getShoppingCartByUserId(user.id);
      }
    });
  }
});

export { User };
