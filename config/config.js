// config.js
require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "averoesdb_dev",
    host: DB_HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "averoesdb_test",
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "averoesdb_prod",
    host: DB_HOST,
    dialect: "postgres",
  },
};
