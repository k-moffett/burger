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

  updateOne(data) {
    // connection.query(`UPDATE burgers SET devoured = true WHERE id = ${this.id}`, function (error, results, fields) {
    //   if (error) throw error;
    // });
    console.log(data, 'orm.js');//TEMP DATA is defined in main.handlebars PUT call
  },

}

module.exports = orm