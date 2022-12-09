import chalk from 'chalk';
import * as DataAccess from './data-access';
import { TOption } from './types';
import http from './http';
import { forEach } from 'ramda';
import axios from 'axios';

export async function findUser(username: string, options: TOption[]) {
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
    const github_user = await http.get(
      `https://api.github.com/users/${username}`
    );
    const repositories = await http.get(github_user.repos_url);
    // TODO: have a hard limit for repos/languages, and a limit sub-option to overwrite hard limit
    // get language URL for each repo URL, and forEach of those, collect the array of languages, \
    // and store a unique set of languages
    const languagesURLRequests = repositories.map((repo: any) =>
      http.get(repo.languages_url)
    );

    const languagesURLResponses = await axios.all(languagesURLRequests);
    console.log(languagesURLResponses);

    // save info to postrges

    // console.log(data);
  } catch (e) {
    process.stderr.write(chalk.red('Error!!\n'));
    throw e;
  }

  // const limit = options.first ? 1 : undefined;
  // console.log(str.split(options.separator, limit));
}
