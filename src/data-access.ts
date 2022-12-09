import { IUser } from './types';

import db from './container/db';

async function findUser(username: string): Promise<IUser> {
  const user = await db.oneOrNone({
    name: 'find-user',
    text: 'SELECT * FROM public.user WHERE username = $1',
    values: [username]
  });
  return user;
}

async function createUser(user: Partial<IUser>): Promise<string> {
  const id = await db.one(
    'INSERT INTO public.user(username, location, languages) VALUES($1, $2, $3) RETURNING id',
    [user.username, user.location, user.laguages]
  );
  return id;
}

export { findUser, createUser };
