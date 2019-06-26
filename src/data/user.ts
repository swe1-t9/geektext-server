import { db } from './db';

import { users } from './db/__generated__/schema';

const createUser = async (
  user: Omit<users, 'created_at' | 'id'>
): Promise<users> =>
  await db('users')
    .insert({ ...user })
    .returning('*')
    .first();

export { createUser };
