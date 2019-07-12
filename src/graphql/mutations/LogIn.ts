import { compare } from 'bcrypt';
import { mutationField, arg, inputObjectType } from 'nexus';

import { getUser } from '../../data/user';

const LogInInput = inputObjectType({
  name: 'LogInInput',
  definition(t) {
    t.field('password', {
      type: 'SensitiveString',
      required: true
    });
    t.field('email', { type: 'EmailAddress', required: true });
  }
});

const LogIn = mutationField('log_in', {
  type: 'JWT',
  args: {
    input: arg({
      type: 'LogInInput',
      required: true
    })
  },
  async resolve(root, { input: { email, password: inputPassword } }) {
    const { id, password } = await getUser(email);
    console.log(password, inputPassword);
    const verifyPassword = await compare(inputPassword, password);
    if (!verifyPassword) {
      throw new Error('Incorrect password');
    }
    return { id };
  }
});

export { LogInInput, LogIn };
