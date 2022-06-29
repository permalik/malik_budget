module.exports = {
  HOST: process.env.HEROKU_HOST,
  USER: process.env.HEROKU_USER,
  PASSWORD: process.env.HEROKU_PASSWORD,
  DB: process.env.HEROKU_DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}