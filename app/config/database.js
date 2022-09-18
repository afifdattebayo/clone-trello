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
    username: "injveomrvsxpsr",
    password: "3b52ef36da91a17f4a1742f9273c16f22fe4460a1efe68a8a3feb81b1235d8e5",
    database: "d6eba0ej4f2uh7",
    port: 5432,
    host: "ec2-52-207-90-231.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  }
}
