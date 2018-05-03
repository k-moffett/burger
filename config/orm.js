const connection = require('./connection.js')
connection.connect();

let home
connection.query('SELECT * FROM burgers', function (error, results, fields) {
  if (error) throw error;
  home = results
});

const orm = {
  
  selectAll() {
    return home
  },

  insertOne(data) {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${data}", false)`, function (error, results, fields) {
       if (error) throw error;
    });
  },

  updateOne() {
    // connection.query(`UPDATE burgers SET devoured = true WHERE id = ${this.id}`, function (error, results, fields) {
    //   if (error) throw error;
    // });
    console.log('Made it to updateONE');

  },

}

module.exports = orm