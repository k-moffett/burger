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
      return new Promise((resolve, reject) => {
      connection.query(`UPDATE burgers SET devoured = true WHERE id = ${data}`, function (error, results, fields){
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  },

}

module.exports = orm