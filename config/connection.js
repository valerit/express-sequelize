
module.exports.development = {
  database: 'testdb',
  username: 'testuser',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql', // 'sqlite' || 'mysql' || 'postgres',
};

module.exports.testing = {
  database: 'testdb',
  username: 'testuser',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports.production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};
