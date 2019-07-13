import { db } from './db';

import { users } from './db/__generated__/schema';

const createUser = async ({
  email,
  ...rest
}: Omit<users, 'created_at' | 'id'>): Promise<users> => {
  await db('users').insert({ email, ...rest });
  return await db('users')
    .select('*')
    .where({ email })
    .first();
};

const getUserByEmail = async (email: string): Promise<users> =>
  await db('users')
    .select('*')
    .where({ email })
    .first();

const getUserById = async (id: ID): Promise<users> =>
  await db('users')
    .select('*')
    .where({ id })
    .first();

export { createUser, getUserByEmail, getUserById };
