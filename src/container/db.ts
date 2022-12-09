const pgp = require('pg-promise');
const config = require('../config');

console.log(config);

const initOptions = {
  // initialization options;
};

const postgres = pgp(initOptions)(config.dbUrl);

export default postgres;
