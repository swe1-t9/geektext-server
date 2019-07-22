import { users } from '../../data/db/__generated__/schema';

type AuthenticatedContext = { viewer: users };

type Context = AuthenticatedContext | {};

const isAuthenticated = (context: Context): context is AuthenticatedContext =>
  (context as AuthenticatedContext).viewer != null;

export { Context, isAuthenticated };
