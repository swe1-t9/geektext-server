import { db } from './db';

import { shipping_addresses } from './db/__generated__/schema';

const createShippingAddress = async (
  address: Omit<shipping_addresses, 'id' | 'created_at'>
): Promise<shipping_addresses> => {
  await db('shipping_addresses').insert(address);
  return db('shipping_addresses')
    .select('*')
    .where({ user_id: address.user_id })
    .first();
};

const getShippingAddress = async (id: ID): Promise<shipping_addresses> => {
  return await db('shipping_addresses')
    .select('*')
    .where({ id })
    .first();
};

const getShippingAddressesByUserId = async (
  userId: ID
): Promise<Array<shipping_addresses>> => {
  return await db('shipping_addresses')
    .select('*')
    .where({ user_id: userId });
};

export {
  getShippingAddress,
  createShippingAddress,
  getShippingAddressesByUserId
};
