import axios from 'axios';

// axios.defaults.baseURL = 'https://api.github.com/users/';

async function get(url: string) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `${process.env.GITHUB_PAT}`
      }
    });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export default { get };
