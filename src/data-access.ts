import db from './config/db';
import { IUser } from './types';

async function findUser(username: string): Promise<IUser> {
  const user = await db.one({
    name: 'find-user',
    text: 'SELECT * FROM users WHERE username = $1',
    values: [username]
  });
  return user;
}

async function createUser(user: Partial<IUser>): Promise<string> {
  const id = await db.one(
    'INSERT INTO users(username, location, languages) VALUES($1, $2, $3) RETURNING id',
    [user.username, user.location, user.laguages]
  );
  return id;
}

export { findUser, createUser };
