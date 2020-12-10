module.exports = {
  "development":{
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "ace",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "test":{
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "acetest",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
  };