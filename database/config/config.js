module.exports = { //transformo manualmente config.js en un módulo exportable. JSON => module.exports
  "development": {
    "username": "root",
    "password": "",
    "database": "db", //así se llama nuestra base de datos en WorkBench
    "host": "127.0.0.1",
    "dialect": "mysql",
    
    
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
