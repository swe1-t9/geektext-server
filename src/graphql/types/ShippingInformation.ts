import { objectType } from 'nexus';

const ShippingInformation = objectType({
  name: 'ShippingInformation',
  description: 'The shipping information of a user',
  definition(t) {
    t.id('selected_shipping_address_id', { nullable: true });
    t.list.field('shipping_addresses', {
      type: 'Address'
    });
  }
});

export { ShippingInformation };
