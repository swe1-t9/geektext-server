import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import {
  updateShippingAddressById,
  getShippingAddressesByUserId
} from '../../data/shippingAddress';

const SetDefaultShippingAddressInput = inputObjectType({
  name: 'SetDefaultShippingAddressInput',
  definition(t) {
    t.id('address_id', { required: true });
  }
});

const SetDefaultShippingAddress = mutationField(
  'set_default_shipping_address',
  {
    type: 'ShippingAddress',
    args: {
      input: arg({
        type: 'SetDefaultShippingAddressInput',
        required: true
      })
    },
    async resolve(root, { input: { address_id } }, ctx: Context) {
      if (!isAuthenticated(ctx)) {
        throw new AuthenticationError('Unauthenticated');
      }
      const shippingAddresses = await getShippingAddressesByUserId(
        ctx.viewer.id
      );
      await Promise.all(
        shippingAddresses.map(shippingAddress =>
          updateShippingAddressById(shippingAddress.id, {
            is_default: false
          })
        )
      );
      return await updateShippingAddressById(address_id, { is_default: true });
    }
  }
);

export { SetDefaultShippingAddressInput, SetDefaultShippingAddress };
