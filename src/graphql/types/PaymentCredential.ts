import { objectType } from 'nexus';

const PaymentCredential = objectType({
  name: 'PaymentCredential',
  description: 'A physical address to ship to.',
  definition(t) {
    t.id('id');
    t.int('last_four_digits');
    t.string('card_association');
  }
});

export { PaymentCredential };
