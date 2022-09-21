module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "clone_trello",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
    port:  process.env.DB_PORT,
    host:  process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  }
}
