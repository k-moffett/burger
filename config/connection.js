const mysql = require('mysql');

const database = () => {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'burgers_db'
  });

  connection.connect();
}

module.exports = database