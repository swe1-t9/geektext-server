import { hash } from 'bcrypt';
import { mutationField, arg, inputObjectType } from 'nexus';
import nullthrows from 'nullthrows';

import { createUser } from '../../data/user';
import { createShoppingCart } from '../../data/shoppingCart';
import { createShippingAddress } from '../../data/shippingAddress';
import { createSavedCart } from '../../data/savedCart';

const { BCRYPT_SALT_ROUNDS } = process.env;

const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  definition(t) {
    t.string('username', { required: true });
    t.string('first_name', { required: true });
    t.string('last_name', { required: true });
    t.field('password', {
      type: 'SensitiveString',
      required: true
    });
    t.field('email', { type: 'EmailAddress', required: true });
    t.string('address_line_1', { required: true });
    t.string('address_line_2');
    t.string('address_line_3');
    t.string('city', { required: true });
    t.string('region');
    t.string('country', { required: true });
    t.field('postal_code', { type: 'PostalCode', required: true });
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
  async resolve(
    root,
    {
      input: {
        password,
        address_line_1,
        address_line_2,
        address_line_3,
        country,
        city,
        postal_code,
        region,
        ...rest
      }
    }
  ) {
    const hashedPassword = await hash(
      password,
      parseInt(nullthrows(BCRYPT_SALT_ROUNDS))
    );
    const { id } = await createUser({
      ...rest,
      password: hashedPassword
    });
    await createShoppingCart(id);
    await createShippingAddress({
      user_id: id,
      address_line_1,
      address_line_2: address_line_2 || null,
      address_line_3: address_line_3 || null,
      region: region || null,
      city,
      country,
      postal_code,
      is_default: true
    });
    await createSavedCart(id);
    return { id };
  }
});

export { SignUpInput, SignUp };
