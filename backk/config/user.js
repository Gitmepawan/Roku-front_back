const creds={
  // create a bunch (pool) of potential connecitons for multiple users
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root', // for mac
  database        : 'roku_temp',
 port            : 3306 // for mac
}

module.exports = creds;