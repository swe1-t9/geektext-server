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

const getShippingAddress = async (id: ID): Promise<shipping_addresses> =>
  await db('shipping_addresses')
    .select('*')
    .where({ id })
    .first();

const getShippingAddressesByUserId = async (
  userId: ID
): Promise<Array<shipping_addresses>> =>
  await db('shipping_addresses')
    .select('*')
    .where({ user_id: userId })
    .orderBy('created_at', 'asc');

const updateShippingAddressById = async (
  shippingAddressId: ID,
  updatedAddress: Partial<shipping_addresses>
): Promise<shipping_addresses> => {
  await db('shipping_addresses')
    .update(updatedAddress)
    .where({ id: shippingAddressId });
  return await db('shipping_addresses')
    .select('*')
    .where({ id: shippingAddressId })
    .first();
};

const deleteShippingAddress = async (
  shippingAddressId: ID
): Promise<shipping_addresses> =>
  await db('shipping_addresses')
    .delete('*')
    .where({ id: shippingAddressId })
    .first();

export {
  getShippingAddress,
  createShippingAddress,
  getShippingAddressesByUserId,
  updateShippingAddressById,
  deleteShippingAddress
};
