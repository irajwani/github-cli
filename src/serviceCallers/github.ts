import axios from 'axios';
import constants from 'src/constants';
import http from 'src/http';

export async function findGithubUser(username: string) {
  // hit github API
  const github_user = await http.get(
    constants.SERVICES.GITHUB_USERS + username
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
}
