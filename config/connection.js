const development = {
  database: 'testdb',
  username: 'testuser',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql' // 'sqlite' || 'mysql' || 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'testuser',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql'
};

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql'
};
