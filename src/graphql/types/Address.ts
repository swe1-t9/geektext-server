import { objectType } from 'nexus';

const Address = objectType({
  name: 'Address',
  description: 'A physical address.',
  definition(t) {
    t.id('id');
    t.string('address_line_1');
    t.string('address_line_2', { nullable: true });
    t.string('address_line_3', { nullable: true });
    t.string('city');
    t.string('region', { nullable: true });
    t.postalCode('postal_code');
  }
});

export { Address };
