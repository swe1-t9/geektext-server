import { objectType } from 'nexus';
import { getShippingAddressesByUserId } from '../../data/shippingAddress';
import { getShoppingCartByUserId } from '../../data/shoppingCart';
import { getPaymentCredentialsByUserId } from '../../data/paymentCredential';
import { getSavedCartByUserId } from '../../data/savedCart';

const User = objectType({
  name: 'User',
  description: 'A Geektext user.',
  definition(t) {
    t.id('id');
    t.emailAddress('email');
    t.string('username');
    t.string('first_name');
    t.string('last_name');
    t.list.field('shipping_addresses', {
      type: 'ShippingAddress',
      description: `The user's shipping addresses`,
      resolve(user) {
        return getShippingAddressesByUserId(user.id);
      }
    });
    t.list.field('payment_credentials', {
      type: 'PaymentCredential',
      description: `The user's payment credentials`,
      resolve(user) {
        return getPaymentCredentialsByUserId(user.id);
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
