import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { createPaymentCredential } from '../../data/paymentCredential';

const AddPaymentCredentialInput = inputObjectType({
  name: 'AddPaymentCredentialInput',
  definition(t) {
    t.string('stripe_token', { required: true });
    t.string('card_association', { required: true });
    t.int('last_four_digits', { required: true });
  }
});

const AddPaymentCredential = mutationField('add_payment_credential', {
  type: 'PaymentCredential',
  args: {
    input: arg({
      type: 'AddPaymentCredentialInput',
      required: true
    })
  },
  async resolve(root, { input }, ctx: Context) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await createPaymentCredential({ ...input, user_id: ctx.viewer.id });
  }
});

export { AddPaymentCredentialInput, AddPaymentCredential };
