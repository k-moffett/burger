const connection = require('./connection.js')
connection.connect();

const orm = {
  
  selectAll(results) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM burgers', function (error, results, fields){
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })

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