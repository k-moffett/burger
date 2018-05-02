const database = require('./connection.js')

const ORM = () => {

  selectAll() {
    connection.query('SELECT * FROM burgers', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  }

  insertOne() {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${/*variable for name*/}", false)`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  }

  updateOne() {
    connection.query(`UPDATE burgers SET devoured = true WHERE ${/* variable for burger id when clicked*/}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  }

}

module.exports = ORM