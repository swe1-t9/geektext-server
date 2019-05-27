import { db } from './db';
import { addresses, shipping_addresses } from './db/__generated__/schema';

const getShippingInformation = async (
  userId: ID
): Promise<NexusGen['fieldTypes']['ShippingInformation']> => {
  const shippingAddressesData: Array<shipping_addresses & addresses> = await db
    .select('*')
    .from('shipping_addresses')
    .where('user_id', userId)
    .leftJoin('addresses', 'address_id', 'id');
  const shippingInformation: NexusGen['fieldTypes']['ShippingInformation'] = {
    selected_shipping_address_id: null,
    shipping_addresses: []
  };
  return shippingAddressesData.reduce(
    (
      shippingInformation,
      shippingAddress
    ): NexusGen['fieldTypes']['ShippingInformation'] => {
      if (shippingAddress.is_default) {
        return {
          ...shippingInformation,
          selected_shipping_address_id: shippingAddress.id,
          shipping_addresses: [
            ...shippingInformation.shipping_addresses,
            shippingAddress
          ]
        };
      } else {
        return {
          ...shippingInformation,
          shipping_addresses: [
            ...shippingInformation.shipping_addresses,
            shippingAddress
          ]
        };
      }
    },
    shippingInformation
  );
};

export { getShippingInformation };
