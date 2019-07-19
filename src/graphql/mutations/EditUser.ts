import { AuthenticationError } from 'apollo-server-core';
import { mutationField, arg, inputObjectType } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { updateUserById } from '../../data/user';

const EditUserInput = inputObjectType({
  name: 'EditUserInput',
  definition(t) {
    t.string('first_name', { required: true });
    t.string('last_name', { required: true });
    t.field('email', {
      type: 'EmailAddress',
      required: true
    });
  }
});

const EditUser = mutationField('edit_user', {
  type: 'User',
  args: {
    input: arg({
      type: 'EditUserInput',
      required: true
    })
  },
  async resolve(root, { input }, ctx: Context) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await updateUserById(ctx.viewer.id, input);
  }
});

export { EditUserInput, EditUser };
