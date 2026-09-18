const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SuperSecret123!',
  database: 'testdb'
});

connection.connect();

module.exports = connection;