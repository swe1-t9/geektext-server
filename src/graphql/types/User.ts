import { objectType } from 'nexus';
import { getShippingInformation } from '../../data/shippingInformation';
import { getShoppingCart } from '../../data/shoppingCart'

const User = objectType({
  name: 'User',
  description: 'A Geektext user.',
  definition(t) {
    t.id('id');
    t.emailAddress('email_address');
    t.string('first_name');
    t.string('last_name');
    t.field('shipping_information', {
      type: 'ShippingInformation',
      description: `The user's shipping information`,
      resolve(user) {
        return getShippingInformation(user.id);
      }
    });
    t.field('shopping_cart', {
      type: 'ShoppingCart',
      description: "The user's shopping cart",
      resolve(user) {
        return getShoppingCart(user.id);
      }
    });
  }
});

export { User };
