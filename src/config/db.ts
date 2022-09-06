const initOptions = {
  // initialization options;
};

import pgp from 'pg-promise';

const connection = 'postgres://admin:admin@localhost:5432/db';
const db = pgp()(connection);

console.log(db);

export default db;
