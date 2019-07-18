import { objectType } from 'nexus';

const ShippingAddress = objectType({
  name: 'ShippingAddress',
  description: 'A physical address to ship to.',
  definition(t) {
    t.id('id');
    t.string('address_line_1');
    t.string('address_line_2', { nullable: true });
    t.string('address_line_3', { nullable: true });
    t.string('city');
    t.string('region', { nullable: true });
    t.boolean('is_default');
    t.postalCode('postal_code');
  }
});

export { ShippingAddress };
