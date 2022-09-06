import axios from 'axios';
import * as DataAccess from './data-access';
import { TOption } from './types';

export async function findUser(username: string, options: TOption[]) {
  console.log(username);
  try {
    // does user exist in cache?

    // does user exist in db?
    const user = await DataAccess.findUser(username);
    // TODO: save in cache
    if (user) {
      console.log(user);
      return;
    }

    // hit github API
    const data = await axios.get(`https://api.github.com/users/${username}`);

    // save info to postrges

    console.log(data);
  } catch (e) {
    throw e;
  }

  // const limit = options.first ? 1 : undefined;
  // console.log(str.split(options.separator, limit));
}
