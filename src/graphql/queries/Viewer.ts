import { queryField } from 'nexus';

import { Context, isAuthenticated } from '../context/Context';
import { AuthenticationError } from 'apollo-server-core';

const Viewer = queryField('viewer', {
  type: 'User',
  resolve(root, args, ctx: Context) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return ctx.viewer;
  }
});

export { Viewer };
