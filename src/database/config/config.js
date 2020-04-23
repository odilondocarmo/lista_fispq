require('dotenv').config()

module.exports = {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DATABASE_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};