import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { deletePaymentCredential } from '../../data/paymentCredential';

const RemovePaymentCredentialInput = inputObjectType({
  name: 'RemovePaymentCredentialInput',
  definition(t) {
    t.id('payment_credential_id', { required: true });
  }
});

const RemovePaymentCredential = mutationField('remove_payment_credential', {
  type: 'PaymentCredential',
  args: {
    input: arg({
      type: 'RemovePaymentCredentialInput',
      required: true
    })
  },
  async resolve(root, { input: { payment_credential_id } }, ctx: Context) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await deletePaymentCredential(payment_credential_id);
  }
});

export { RemovePaymentCredentialInput, RemovePaymentCredential };
