import { db } from './db';
import { payment_credentials } from './db/__generated__/schema';

const createPaymentCredential = async (
  paymentCredential: Omit<payment_credentials, 'created_at' | 'id'>
): Promise<payment_credentials> => {
  await db('payment_credentials').insert(paymentCredential);
  return db('payment_credentials')
    .select('*')
    .where({ user_id: paymentCredential.user_id })
    .first();
};

const deletePaymentCredential = async (
  paymentCredentialId: ID
): Promise<payment_credentials> => {
  const paymentCredential = await db('payment_credentials')
    .select('*')
    .where({ id: paymentCredentialId })
    .first();
  await db('payment_credentials')
    .delete('*')
    .where({ id: paymentCredentialId });
  return paymentCredential;
};

const getPaymentCredentialsByUserId = async (
  userId: ID
): Promise<Array<payment_credentials>> =>
  await db('payment_credentials')
    .select('*')
    .where({ user_id: userId });

export {
  createPaymentCredential,
  getPaymentCredentialsByUserId,
  deletePaymentCredential
};
