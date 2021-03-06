require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  sql: {
    connectionLimit: process.env.SQL_CONNECTIONS_LIMIT,
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    port: process.env.SQL_DATABASE_PORT
  }
}
