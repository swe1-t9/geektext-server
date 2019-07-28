import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { createShippingAddress } from '../../data/shippingAddress';

const AddShippingAddressInput = inputObjectType({
  name: 'AddShippingAddressInput',
  definition(t) {
    t.string('address_line_1', { required: true });
    t.string('address_line_2');
    t.string('address_line_3');
    t.string('city', { required: true });
    t.string('region');
    t.string('country', { required: true });
    t.field('postal_code', { type: 'PostalCode', required: true });
  }
});

const AddShippingAddress = mutationField('add_shipping_address', {
  type: 'ShippingAddress',
  args: {
    input: arg({
      type: 'AddShippingAddressInput',
      required: true
    })
  },
  async resolve(
    root,
    { input: { address_line_2, address_line_3, region, ...nonNullableInput } },
    ctx: Context
  ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await createShippingAddress({
      ...nonNullableInput,
      user_id: ctx.viewer.id,
      address_line_2: address_line_2 || null,
      address_line_3: address_line_3 || null,
      region: region || null,
      is_default: false
    });
  }
});

export { AddShippingAddressInput, AddShippingAddress };
