require('dotenv').config()

module.exports = {
  development: {
    url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/${process.env.DB_DATABASE}`,
    dialect:  process.env.DB_CONNECTION,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.DB_CONNECTION,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect:  process.env.DB_CONNECTION,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
}