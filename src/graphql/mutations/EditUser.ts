import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { updateUserById } from '../../data/user';
import {
  getShippingAddressesByUserId,
  updateShippingAddressById
} from '../../data/shippingAddress';

const EditUserInput = inputObjectType({
  name: 'EditUserInput',
  definition(t) {
    t.string('first_name', { required: true });
    t.string('last_name', { required: true });
    t.string('username', { required: true });
    t.field('email', {
      type: 'EmailAddress',
      required: true
    });
    t.id('selected_shipping_address_id', { required: true });
  }
});

const EditUser = mutationField('edit_user', {
  type: 'User',
  args: {
    input: arg({
      type: 'EditUserInput',
      required: true
    })
  },
  async resolve(
    root,
    { input: { selected_shipping_address_id, ...rest } },
    ctx: Context
  ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    const shippingAddresses = await getShippingAddressesByUserId(ctx.viewer.id);
    await Promise.all(
      shippingAddresses.map(shippingAddress =>
        updateShippingAddressById(shippingAddress.id, {
          is_default: false
        })
      )
    );
    await updateShippingAddressById(selected_shipping_address_id, {
      is_default: true
    });
    return await updateUserById(ctx.viewer.id, rest);
  }
});

export { EditUserInput, EditUser };
