const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_USERNAME, DATABASE_PASSWORD,
  DATABASE, DATABASE_HOST,
  DATABASE_PORT, DATABASE_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  },
  test: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  },
  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  }
}
