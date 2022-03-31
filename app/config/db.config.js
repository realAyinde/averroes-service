module.exports = {
    HOST: "localhost",
    USER: "averroes",
    PASSWORD: "1234567",
    DB: "averoesdb_dev",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };