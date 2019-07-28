import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { deleteShippingAddress } from '../../data/shippingAddress';

const RemoveShippingAddressInput = inputObjectType({
  name: 'RemoveShippingAddressInput',
  definition(t) {
    t.id('shipping_address_id', { required: true });
  }
});

const RemoveShippingAddress = mutationField('remove_shipping_address', {
  type: 'ShippingAddress',
  args: {
    input: arg({
      type: 'RemoveShippingAddressInput',
      required: true
    })
  },
  async resolve(root, { input: { shipping_address_id } }, ctx: Context) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await deleteShippingAddress(shipping_address_id);
  }
});

export { RemoveShippingAddressInput, RemoveShippingAddress };
