const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'burgers_db'
});

module.exports = connection