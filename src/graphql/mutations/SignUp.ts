import { hash } from 'bcrypt';
import { mutationField, arg, inputObjectType } from 'nexus';
import nullthrows from 'nullthrows';

import { createUser } from '../../data/user';
import { createShoppingCart } from '../../data/shoppingCart';

const { BCRYPT_SALT_ROUNDS } = process.env;

const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  definition(t) {
    t.string('first_name', { required: true });
    t.string('last_name', { required: true });
    t.field('password', {
      type: 'SensitiveString',
      required: true
    });
    t.field('email', { type: 'EmailAddress', required: true });
  }
});

const SignUp = mutationField('sign_up', {
  type: 'JWT',
  args: {
    input: arg({
      type: 'SignUpInput',
      required: true
    })
  },
  async resolve(root, { input: { password, ...rest } }) {
    const hashedPassword = await hash(
      password,
      parseInt(nullthrows(BCRYPT_SALT_ROUNDS))
    );
    const { id } = await createUser({
      ...rest,
      password: hashedPassword
    });
    await createShoppingCart(id);
    return { id };
  }
});

export { SignUpInput, SignUp };
