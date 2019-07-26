import { objectType } from 'nexus';
import { getShippingInformation } from '../../data/shippingInformation';
import { getShoppingCartByUserId } from '../../data/shoppingCart'
import { getSavedCartByUserId } from '../../data/savedCart'

const User = objectType({
  name: 'User',
  description: 'A Geektext user.',
  definition(t) {
    t.id('id');
    t.emailAddress('email');
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
      async resolve(user) {
        return await getShoppingCartByUserId(user.id);
      }
    });
    t.field('saved_cart', {
      type: 'SavedCart',
      description: "The user's saved items",
      async resolve(user) {
        return await getSavedCartByUserId(user.id);
      }
    });
  }
});

export { User };
