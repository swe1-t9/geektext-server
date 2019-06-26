import { mutationField, arg, inputObjectType } from 'nexus';

import { createUser } from '../../data/user';

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
  async resolve(root, args) {
    const { id } = await createUser({
      ...args.input
    });
    return { id };
  }
});

export { SignUpInput, SignUp };
